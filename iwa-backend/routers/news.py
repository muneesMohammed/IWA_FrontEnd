from fastapi import APIRouter, HTTPException
from typing import List
from models import NewsItem
from database import get_items_by_pk_prefix, get_item, put_item

router = APIRouter(prefix="/api/news", tags=["News"])

@router.get("/", response_model=List[NewsItem])
def get_all_news():
    items = get_items_by_pk_prefix("NEWS#")
    return [NewsItem(**item) for item in items]

@router.get("/{news_id}", response_model=NewsItem)
def get_news(news_id: str):
    item = get_item(f"NEWS#{news_id}", "METADATA")
    if not item:
        raise HTTPException(status_code=404, detail="News not found")
    return NewsItem(**item)

@router.post("/", response_model=NewsItem)
def create_news(news: NewsItem):
    item_dict = news.dict()
    item_dict["PK"] = f"NEWS#{news.id}"
    item_dict["SK"] = "METADATA"
    put_item(item_dict)
    return news
