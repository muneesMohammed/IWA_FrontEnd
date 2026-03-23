from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import events, news, programs
import uvicorn

app = FastAPI(title="IWA Frontend Dynamic API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(events.router)
app.include_router(news.router)
app.include_router(programs.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to IWA Backend API. Go to /docs for Swagger UI."}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
