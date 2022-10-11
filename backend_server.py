from http.client import HTTPResponse
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

app = FastAPI()


origins = [
    "http://localhost:8000",
    "http://localhost:7000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

todos = [
    ["Client 2", "Client 5", "Client 6", "Client 1", "Client 3", "Client 4"],
]

@app.get("/api/clientList", tags=["todos"])
async def get_todos() -> dict:
    return { "data": todos }



@app.get("/items/{item_id}")
async def read_item(item_id: int):
    return {"item_id": item_id}


