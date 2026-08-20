from typing import Union

from fastapi import APIRouter

router = APIRouter()

@router.get("/Usuarios/{id}")
def listUsuarios(id: int):
    return [
        {"id": id, "nome": "Rodrigo", "Idade": 15 },
        {"id": id, "nome": "xxxx", "idade": 42},
    ]