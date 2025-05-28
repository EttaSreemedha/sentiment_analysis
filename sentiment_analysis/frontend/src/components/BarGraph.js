import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const BarGraph = ({ data }) => (
  <BarChart width={500} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="label" />
    <YAxis domain={[0, 1]} />
    <Tooltip />
    <Bar dataKey="probability" fill="#8884d8" />
  </BarChart>
);

export default BarGraph;
