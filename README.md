# MLT-Project-Toxicity-Classification

## Entrenamiento

Para realizar el entrenamiento de los modelos y entender el proceso seguido respecto al preprocesamiento, entrenamiento y evaluación, siga los siguientes pasos:

1. Ejecute el notebook `preprocessing_embeddings.ipynb` el cual generará los archivos con los datos e incrustaciones necesarias para entrenar y evaluar los modelos.

2. Ejecute alguno de los siguientes notebooks:
- `dl_cnn.ipynb`: Modelo creado usando una arquitectura convolucional.
- `dl_gru.ipynb`: Modelo usando la arquitectura recurrente GRU.
- `ml_logistic_regression.ipynb`: Modelo de regresión logística.
- `ml_naive_bayes.ipynb`: Modelo de naive bayes.
- `svm_dense.ipynb`: Modelo de SVM y modelo de capas lineales.
- `xgb_bilstm_robertaft.ipynb`: Modelo que usa el clasificador de XGBoost, modelo que usa la arquitectura recurrente bidireccional BI-LSTM y modelo que hace ajuste de los pesos de `cardiffnlp/twitter-roberta-base` junto con una cabeza de clasificación.

## Ejecución de la demostración (Inferencia)

Para ejecutar la demostración y probar el mejor modelo alcanzado debera ejecutar el notebook `xgb_bilstm_robertaft.ipynb` el cual genera un archivo `best_model.pth` el cual debe ser puesto en la carpeta de backend. Posterior a esto, se debe realizar la ejecución de tanto el frontend como el backend.

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
