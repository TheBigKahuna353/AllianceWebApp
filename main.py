from http.client import HTTPResponse
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()


origins = [
    "http://localhost:8000",
    "http://localhost:7000",
    "https://623tu9.deta.dev",
    "https://thebigkahuna353.github.io"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

todos = [
    "Client 2", "Client 5", "Client 6", "Client 1", "Client 3", "Client 4"
]

@app.get("/api/clientList", tags=["todos"])
async def get_todos() -> dict:
    return { "data": todos }


class User(BaseModel):
    name: str


@app.post("/api/clientList/")
async def add_todo(name: User) -> dict:
    todos.append(name.name)
    return { "data": todos }

@app.delete("/api/clientList/{name}")
async def delete_todo(name: str) -> dict:
    todos.remove(name)
    return { "data": todos }

@app.get("/items/{item_id}")
async def read_item(item_id: int):
    return {"item_id": item_id}


