from pydantic import BaseModel
from typing import List, Optional

class EventItem(BaseModel):
    id: str
    title: str
    date: str
    location: str
    image: str
    description: str
    points: List[str]
    categories: List[str]

class Guest(BaseModel):
    name: str
    role: str
    image: str

class Quote(BaseModel):
    text: str
    author: str
    role: Optional[str] = None

class EventDetail(BaseModel):
    eventId: str
    bannerImage: str
    mainImage: str
    content: List[str]
    quote: Optional[Quote] = None
    gallery: List[str]
    address: str
    email: str
    phone: str
    guests: List[Guest]
    mapEmbedUrl: str

class NewsItem(BaseModel):
    id: int
    title: str
    category: str
    views: int
    comments: int
    date: str
    image: str
    author: str
    description: str

class CategoryCount(BaseModel):
    name: str
    count: int

class ProgramItem(BaseModel):
    id: str
    title: str
    image: str
    categories: List[str]
    category: str
    author: str
    raised: int
    goal: int

class ProgramDetail(BaseModel):
    programId: str
    title: str
    subtitle: str
    bannerImage: str
    featuredImage: str
    category: str
    raised: int
    goal: int
    description: List[str]
    programPhotos: List[str]
    categories: List[CategoryCount]
    ourGoals: List[str]
    hashtags: List[str]
    gallery: List[str]
