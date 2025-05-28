import React, { useState } from 'react';
import axios from 'axios';
import BarGraph from './BarGraph';
import '../styles.css';

const Dashboard = () => {
  const [text, setText] = useState('');
  const [sentiment, setSentiment] = useState('');
  const [probabilities, setProbabilities] = useState([]);

  const handleSentiment = async () => {
    if (!text.trim()) return alert('✍️ Please enter some text.');

    try {
      const res = await axios.post('http://localhost:5000/analyze_sentiment', { text });

      setSentiment(res.data.label);

      // Combine labels and probabilities for the bar chart
      const probData = res.data.labels.map((label, i) => ({
        label,
        probability: res.data.probabilities[i],
      }));

      setProbabilities(probData);
    } catch (error) {
      console.error('API error:', error);
      alert('⚠️ Error analyzing sentiment. Is the backend running?');
    }
  };

  const sentimentEmoji = {
  joy: '😊',
  sad: '😞',
  fear: '😱',
  love: '😍',
  surprise: '😲',
  };

  return (
    <div className="container">
      <h2>🧠 Sentiment Analyzer</h2>
      <input
        type="text"
        placeholder="💬 Enter a sentence..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSentiment}>🔍 Analyze Sentiment</button>

      {sentiment && (
        <h3>
          🗣️ Predicted Sentiment: {sentiment} {sentimentEmoji[sentiment] || ''}
        </h3>
      )}

      {probabilities.length > 0 && <BarGraph data={probabilities} />}
    </div>
  );
};

export default Dashboard;
