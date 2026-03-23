import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    assert "Welcome" in response.json()["message"]

def test_get_events():
    response = client.get("/api/events/")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_get_news():
    response = client.get("/api/news/")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_get_programs():
    response = client.get("/api/programs/")
    assert response.status_code == 200
    assert isinstance(response.json(), list)
