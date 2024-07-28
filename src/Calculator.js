// src/Calculator.js
import React, { useState } from 'react';

const Calculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [compound, setCompound] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);
    const n = parseFloat(compound);

    if (isNaN(P) || isNaN(r) || isNaN(t) || isNaN(n)) {
      setResult('Please enter valid numbers');
      return;
    }

    const A = P * Math.pow(1 + r / n, n * t);
    const interest = A - P;

    setResult(`Final Amount: ₹${A.toFixed(2)} | Interest Earned: ₹${interest.toFixed(2)}`);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Mutual Fund Compound Interest Calculator</h1>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Principal Amount:</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Enter principal amount"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Annual Interest Rate (%):</label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Enter annual interest rate"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Time (years):</label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Enter time in years"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Compounds per Year:</label>
        <input
          type="number"
          value={compound}
          onChange={(e) => setCompound(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Enter compounds per year"
        />
      </div>
      <button
        onClick={handleCalculate}
        className="w-full bg-blue-500 text-white py-2 rounded-md"
      >
        Calculate
      </button>
      {result && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <strong>{result}</strong>
        </div>
      )}
    </div>
  );
};

export default Calculator;
