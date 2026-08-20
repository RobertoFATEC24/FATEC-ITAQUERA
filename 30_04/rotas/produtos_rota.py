from typing import Union
from controller.produtosController import listar_produtos, cadastrar_produtos
from fastapi import APIRouter

app = APIRouter()

@app.post("/produtos")
def listProducts():
     def listar_produtos():
          
