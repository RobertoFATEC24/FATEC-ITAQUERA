from typing import Union
from rotas.produtos_rota import router as rota_produtos
from rotas.usuarios_rota import router as rota_usuarios
from fastapi import FastAPI

app = FastAPI()

app.include_router(rota_produtos, tags=["produtos"])
app.include_router(rota_usuarios, tags=["usuarios"])

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000)