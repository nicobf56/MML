import torch
import torch.nn as nn
from transformers import AutoModel, AutoTokenizer

MODEL_NAME = "cardiffnlp/twitter-roberta-base"
DEVICE = torch.device("cuda" if torch.cuda.is_available() else "cpu")

class BERTLayer(nn.Module):
    def __init__(self, model_name):
        super().__init__()
        self.roberta = AutoModel.from_pretrained(model_name)
        for param in self.roberta.parameters():
            param.requires_grad = False

    def forward(self, input_ids, attention_mask):
        outputs = self.roberta(input_ids=input_ids, attention_mask=attention_mask)
        return outputs.last_hidden_state[:, 0, :]

class ClassificationHead(nn.Module):
    def __init__(self):
        super().__init__()
        self.linear = nn.Linear(768, 256)
        self.relu = nn.ReLU()
        self.dropout = nn.Dropout(p=0.3)
        self.linear2 = nn.Linear(256, 32)
        self.relu2 = nn.ReLU()
        self.dropout2 = nn.Dropout(p=0.2)
        self.linear3 = nn.Linear(32, 1)

    def forward(self, x):
        x = self.linear(x)
        x = self.relu(x)
        x = self.dropout(x)
        x = self.linear2(x)
        x = self.relu2(x)
        x = self.dropout2(x)
        x = self.linear3(x)
        return x

class CustomModel(nn.Module):
    def __init__(self, model_name):
        super().__init__()
        self.bert = BERTLayer(model_name)
        self.head = ClassificationHead()

    def forward(self, input_ids, attention_mask):
        x = self.bert(input_ids, attention_mask)
        x = self.head(x)
        return x


_model = CustomModel(MODEL_NAME)
_model.load_state_dict(torch.load("best_model.pth", map_location=DEVICE))
_model.eval().to(DEVICE)
_tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)


def predict_text(text):
    if not text.strip():
        return {"label": "Invalid", "score": 0.0}

    encoding = _tokenizer(
        text,
        return_tensors="pt",
        truncation=True,
        padding="max_length",
        max_length=32
    )
    input_ids = encoding["input_ids"].to(DEVICE)
    attention_mask = encoding["attention_mask"].to(DEVICE)

    with torch.no_grad():
        output = _model(input_ids, attention_mask)
        prob = torch.sigmoid(output).item()
        label = "Toxic" if prob > 0.5 else "Not Toxic"

    return {
        "label": label,
        "score": round(prob, 4)
    }