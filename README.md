# 🧠 Sentiment Analyzer

A simple React frontend that connects to a backend API to analyze the sentiment of input text and displays the result with probabilities using a bar chart.

## 🚀 Features

- Text input for sentiment analysis
- Displays predicted sentiment (e.g., Positive, Negative, Neutral)
- Probability distribution chart using Recharts

## 🛠️ Setup Instructions

### 1. Clone the Repository


git clone <your-repo-url>
cd <project-folder>
2. Install Frontend Dependencies
npm install
3. Start the Frontend
npm start
Runs at: http://localhost:3000

4. Backend API Requirements
Ensure your backend (Flask/Node.js) is running at:

http://localhost:5000/analyze_sentiment
Backend should accept a POST request like:
{
  "text": "your sentence here"
}
And respond with:
{
  "label": "Positive",
  "labels": ["Positive", "Negative", "Neutral"],
  "probabilities": [0.75, 0.15, 0.10]
}
