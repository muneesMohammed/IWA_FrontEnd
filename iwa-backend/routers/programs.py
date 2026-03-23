from fastapi import APIRouter, HTTPException
from typing import List
from models import ProgramItem, ProgramDetail
from database import get_items_by_pk_prefix, get_item, put_item
import uuid

router = APIRouter(prefix="/api/programs", tags=["Programs"])

@router.get("/", response_model=List[ProgramItem])
def get_all_programs():
    items = get_items_by_pk_prefix("PROGRAM#")
    return [ProgramItem(**item) for item in items]

@router.get("/{program_id}", response_model=ProgramDetail)
def get_program_detail(program_id: str):
    item = get_item(f"PROGRAM#{program_id}", "DETAIL")
    if not item:
        raise HTTPException(status_code=404, detail="Program detail not found")
    return ProgramDetail(**item)

@router.post("/", response_model=ProgramItem)
def create_program(program: ProgramItem):
    if not program.id:
        program.id = str(uuid.uuid4())
    item_dict = program.dict()
    item_dict["PK"] = f"PROGRAM#{program.id}"
    item_dict["SK"] = "METADATA"
    put_item(item_dict)
    return program

@router.post("/{program_id}/detail", response_model=ProgramDetail)
def create_program_detail(program_id: str, detail: ProgramDetail):
    detail.programId = program_id
    item_dict = detail.dict()
    item_dict["PK"] = f"PROGRAM#{program_id}"
    item_dict["SK"] = "DETAIL"
    put_item(item_dict)
    return detail
