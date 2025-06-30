# MML-Project-Toxicity-Classification


## Ejecución de la demostración (Inferencia)

Descargar el archivo best_model.pth de: https://uniandes-my.sharepoint.com/:f:/g/personal/n_bedoyaf_uniandes_edu_co/EkU0n4vk1Z9OhbkCi7mGhO4BcPac0JiJDTtLN9aR337R1A?e=ps6e4a
Ubicar este archivo dentro de la carpeta del backend (al mismo nivel de app.py) y continuar con los siguientes pasos

### Ejecución del backend

Para ejecutar el backend primero debe conectarse a un ambiente virtual, para esto ejecute los siguientes comandos desde la carpeta raiz del proyecto:

Para linux/macOS:
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
```

Para Windows (CMD):
```bash
cd backend
python -m venv venv
\venv\Scripts\activate
```

Posterior a crear e ingresar al ambiente virtual debera instalar las dependencias:
```bash
pip install -r requirements.txt
```

Ahora, sera necesario ejecutar el servidor backend:

Para linux/macOS:
```bash
python3 app.py
```

Para Windows (CMD):
```bash
python app.py
```

### Ejecución del frontend

Para ejecutar el frontend, ejecute los siguientes comandos desde la carpeta raiz del proyecto. Recuerde tener node instalado.

```bash
cd frontend
npm i
npm run start
```
