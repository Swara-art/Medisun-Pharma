from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi.templating import Jinja2Templates
from pathlib import Path

templates = Jinja2Templates(directory="templates")

app = FastAPI()

@app.get("/logout", response_class=HTMLResponse)
async def logout(request: Request):
    # Clear the session or perform logout logic
    request.session.clear()
    
    return RedirectResponse(url="/", status_code=303)  


@app.get("/auth", response_class=HTMLResponse)
async def auth(request: Request):
    user_name = request.session.get("user_name")
    
    if not user_name:
        return RedirectResponse(url="/login", status_code=303)
    
    return templates.TemplateResponse("/", {
        "request": request,
        "user_name": user_name,
    })
    
@app.post("/auth", response_class=HTMLResponse)
async def auth_post(request: Request):
    form_data = await request.form()
    user_name = form_data.get("user_name")
    
    # Here you would typically validate the user credentials
    request.session["user_name"] = user_name
    
    return templates.TemplateResponse("index.html", {
        "request": request,
        "user_name": user_name,
    })