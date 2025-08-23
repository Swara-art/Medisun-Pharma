from fastapi import FastAPI, Request, Depends
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
from fastapi.security import OAuth2PasswordBearer
from fastapi.staticfiles import StaticFiles
from starlette.middleware.sessions import SessionMiddleware
from pathlib import Path
import os
from dotenv import load_dotenv


# Load environment variables from .env file
load_dotenv()

# Ensure the templates directory exists
BASE_DIR = Path(__file__).resolve().parent
templates = Jinja2Templates(directory="templates")

# Initialize FastAPI app
app = FastAPI()

# Sessions (required if you want request.session to work)
app.add_middleware(SessionMiddleware, secret_key=os.getenv("SECRET_KEY", "dev-secret"))

# Mount static files directory
app.mount("/static", StaticFiles(directory="static"), name="static")

# Dependency to get the current user from the session
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/token")

# Define the root path to render the index.html template
@app.get("/", response_class=HTMLResponse)
def read_root(request: Request):
    user_name = request.session.get("user_name")
    
    return templates.TemplateResponse("index.html", {
        "request": request,
        "user_name": user_name,
    })
    
@app.get("/about", response_class=HTMLResponse)
def about(request: Request):
    user_name = request.session.get("user_name")
    
    return templates.TemplateResponse("about.html", {
        "request": request,
        "user_name": user_name,
    })
    
@app.get("/distributors", response_class=HTMLResponse)
def contact(request: Request):
    user_name = request.session.get("user_name")
    
    return templates.TemplateResponse("distributors.html", {
        "request": request,
        "user_name": user_name,
    })
    
@app.get("/products", response_class=HTMLResponse)
def products(request: Request):
    user_name = request.session.get("user_name")
    
    return templates.TemplateResponse("products.html", {
        "request": request,
        "user_name": user_name,
    })

@app.get("/event", response_class=HTMLResponse)
def event(request: Request):
    user_name = request.session.get("user_name")
    
    return templates.TemplateResponse("event.html", {
        "request": request,
        "user_name": user_name,
    })
    
@app.get("/career", response_class=HTMLResponse)
def career(request: Request):
    user_name = request.session.get("user_name")
    
    return templates.TemplateResponse("career.html", {
        "request": request,
        "user_name": user_name,
    })
    
@app.get("/contact", response_class=HTMLResponse)
def contact(request: Request):
    user_name = request.session.get("user_name")
    
    return templates.TemplateResponse("contact.html", {
        "request": request,
        "user_name": user_name,
    })
    
import logout, signup, logout

