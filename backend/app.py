import os
import pandas as pd
import re
import pickle
from flask import Flask, request, jsonify
from flask_cors import CORS
from collections import defaultdict
from model_loader import predict_text

app = Flask(__name__)
CORS(app)

#DATASET_PATH = "balanced_data.csv"
PICKLE_PATH = "word_stats.pkl"


with open(PICKLE_PATH, "rb") as f:
    word_stats = pickle.load(f)


@app.route('/word_stats', methods=['GET'])
def get_word_stats():
    word = request.args.get('word', '').lower()
    stats = word_stats.get(word, {'toxic': 0, 'not_toxic': 0})
    
    return jsonify({
        "word": word,
        "data": [
            { "name": "Not Toxic", "Frequency": stats['not_toxic'] },
            { "name": "Toxic", "Frequency": stats['toxic'] }
        ]
    })


@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    result = predict_text(data.get("text", ""))
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
