import os
import boto3
from botocore.exceptions import ClientError
from boto3.dynamodb.conditions import Key

# Use DynamoDB Local or AWS depending on environment
DYNAMODB_ENDPOINT = os.getenv("DYNAMODB_ENDPOINT", "http://localhost:8000")
REGION_NAME = os.getenv("AWS_DEFAULT_REGION", "us-east-1")
TABLE_NAME = "iwa_content"

# Setting up dynamodb resource
# For local dev without real AWS credentials, you can pass dummy keys.
dynamodb = boto3.resource(
    "dynamodb",
    endpoint_url=DYNAMODB_ENDPOINT,
    region_name=REGION_NAME,
    aws_access_key_id=os.getenv("AWS_ACCESS_KEY_ID", "dummy"),
    aws_secret_access_key=os.getenv("AWS_SECRET_ACCESS_KEY", "dummy"),
)

def create_table_if_not_exists():
    try:
        table = dynamodb.create_table(
            TableName=TABLE_NAME,
            KeySchema=[
                {"AttributeName": "PK", "KeyType": "HASH"},
                {"AttributeName": "SK", "KeyType": "RANGE"},
            ],
            AttributeDefinitions=[
                {"AttributeName": "PK", "AttributeType": "S"},
                {"AttributeName": "SK", "AttributeType": "S"},
            ],
            ProvisionedThroughput={"ReadCapacityUnits": 5, "WriteCapacityUnits": 5},
        )
        table.wait_until_exists()
    except ClientError as e:
        if e.response["Error"]["Code"] == "ResourceInUseException":
            pass # Table already exists
        else:
            raise

def get_table():
    return dynamodb.Table(TABLE_NAME)

def get_items_by_pk_prefix(prefix: str):
    table = get_table()
    # To get all items of a certain type, we need a scan or GSI. 
    # For simplicity, assuming small dataset, we can use scan.
    # In production, a GSI on an 'EntityType' attribute would be better.
    response = table.scan(
        FilterExpression="begins_with(PK, :prefix) AND SK = :sk",
        ExpressionAttributeValues={":prefix": prefix, ":sk": "METADATA"}
    )
    return response.get("Items", [])

def get_item(pk: str, sk: str = "METADATA"):
    table = get_table()
    response = table.get_item(Key={"PK": pk, "SK": sk})
    return response.get("Item")

def put_item(item: dict):
    table = get_table()
    table.put_item(Item=item)
    return item

create_table_if_not_exists()
