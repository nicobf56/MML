# MML-Project-Toxicity-Classification


## Ejecución de la demostración (Inferencia)

Para ejecutar la demostración y probar el mejor modelo alcanzado debera ejecutar el notebook `roberta_finetuning.ipynb` el cual genera un archivo `best_model.pth` el cual debe ser puesto en la carpeta de backend. Posterior a esto, se debe realizar la ejecución de tanto el frontend como el backend.

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
.\venv\Scripts\activate
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
