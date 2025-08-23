from fastapi import FastAPI, Request, Form
from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi.templating import Jinja2Templates
from pathlib import Path


templates = Jinja2Templates(directory="templates")

app = FastAPI()

@app.get("/login", response_class=HTMLResponse)
async def login(request: Request):
    
    return templates.TemplateResponse("login.html", {
        "request": request
    })
    
@app.post("/login", response_class=HTMLResponse)
async def login_post(
    request: Request,
    email: str = Form(...),
    password: str = Form(...)
):
    form_data = await request.form()
    user_name = form_data.get("user_name")
    
    # Here you would typically validate the user credentials
    request.session["user_name"] = user_name
    
    return templates.TemplateResponse("index.html", {
        "request": request,
        "user_name": user_name,
    })