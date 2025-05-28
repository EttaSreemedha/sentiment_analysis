from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import load_model
import pickle
from tensorflow.keras.preprocessing.sequence import pad_sequences

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load tokenizer
with open('models/tokenizer.pkl', 'rb') as f:
    tokenizer = pickle.load(f)

# Load label encoder
with open('models/label_encoder.pkl', 'rb') as f:
    le = pickle.load(f)

# Load Keras model
model = load_model('models/sentiment_model.h5')

max_len = 100  # Same max_len used during training

@app.route('/analyze_sentiment', methods=['POST'])
def analyze_sentiment():
    data = request.get_json(force=True)
    text = data.get('text', '')
    print(f"Received text: {text}")

    # Tokenize and pad input text
    seq = tokenizer.texts_to_sequences([text])
    padded = pad_sequences(seq, maxlen=max_len, padding='post', truncating='post')

    # Predict probabilities
    preds = model.predict(padded)[0]
    print(f"Prediction probabilities: {preds}")

    # Get label with highest probability
    label_index = np.argmax(preds)
    label = le.inverse_transform([label_index])[0]

    # Prepare and send response
    response = {
        'label': label,
        'probabilities': preds.tolist(),
        'labels': le.classes_.tolist()
    }
    return jsonify(response)

if __name__ == '__main__':
    # Debug=True for auto-reload & detailed errors
    app.run(host='0.0.0.0', port=5000, debug=True)
