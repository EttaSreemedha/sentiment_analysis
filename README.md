# 🧠 Emotion Analyzer

A simple React frontend that connects to a backend API to analyze emotions from input text and visualize predictions with probabilities using a bar chart.

## 🚀 Features

- Input field for analyzing emotions in text
- Predicts one of six emotions: joy, sad, anger, fear, love, surprise
- Displays probabilities visually using Recharts

## 🛠️ Setup Instructions

### 1. Clone the Repository
git clone <your-repo-url>
cd <project-folder>
2. Install Frontend Dependencies
npm install
3. Start the Frontend
npm start
Frontend runs at: http://localhost:3000

4. Backend API Requirements
Ensure your backend (Flask or Node.js) is running at:

http://localhost:5000/analyze_sentiment
It should accept a POST request:

{
  "text": "your sentence here"
}
And respond with:

{
  "label": "joy",
  "labels": ["joy", "sad", "anger", "fear", "love", "surprise"],
  "probabilities": [0.35, 0.20, 0.15, 0.10, 0.15, 0.05]
}
🧰 Tech Stack
React

Axios

Recharts
