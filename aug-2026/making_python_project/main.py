# main.py
from fastapi import FastAPI,Request

app = FastAPI()

@app.get("/")
def read_root(req: Request):
    print(req)
    return {"message": "Hello World from FastAPI + uv!"}


@app.get("/hello")
def read_hello():
    return {"message": "Hello from the /hello endpoint!"}