# app/main.py
from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
from .text_analyzer import analyze_text

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/')
def hello_world():
    return "Hello, World!"


@app.route('/part-of-speech', methods=['POST'])
def analyze():
    data = request.json
    text = data.get('text', '')
    if not text:
        return jsonify({'error': 'No text provided'}), 400

    result = analyze_text(text)
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
