from fastapi import APIRouter, HTTPException
from typing import List
from models import EventItem, EventDetail
from database import get_items_by_pk_prefix, get_item, put_item
import uuid

router = APIRouter(prefix="/api/events", tags=["Events"])

@router.get("/", response_model=List[EventItem])
def get_all_events():
    items = get_items_by_pk_prefix("EVENT#")
    return [EventItem(**item) for item in items]

@router.get("/{event_id}", response_model=EventDetail)
def get_event_detail(event_id: str):
    item = get_item(f"EVENT#{event_id}", "DETAIL")
    if not item:
        raise HTTPException(status_code=404, detail="Event detail not found")
    return EventDetail(**item)

@router.post("/", response_model=EventItem)
def create_event(event: EventItem):
    if not event.id:
        event.id = str(uuid.uuid4())
    item_dict = event.dict()
    item_dict["PK"] = f"EVENT#{event.id}"
    item_dict["SK"] = "METADATA"
    put_item(item_dict)
    return event

@router.post("/{event_id}/detail", response_model=EventDetail)
def create_event_detail(event_id: str, detail: EventDetail):
    detail.eventId = event_id
    item_dict = detail.dict()
    item_dict["PK"] = f"EVENT#{event_id}"
    item_dict["SK"] = "DETAIL"
    put_item(item_dict)
    return detail
