import React, { useState } from 'react';
import axios from 'axios';

function EvaluateRule() {
  const [ruleString, setRuleString] = useState('');
  const [attributes, setAttributes] = useState('');
  const [message, setMessage] = useState('');
  const [wrong, setWrong] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/evaluate_rule', {
        rule_string: ruleString,
        attributes: JSON.parse(attributes)
      });
      setMessage(response.data.result); 
      setWrong(false);
    } catch (error) {
      console.error('Error evaluating rule', error);
      setMessage('');
      setWrong(true);
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Evaluate Rule</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-gray-700 font-medium">Rule String:
            <input 
              type="text" 
              value={ruleString} 
              onChange={(e) => setRuleString(e.target.value)} 
              required  
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
            />
          </label>
        </div>
        <div className="space-y-2">
          <label className="block text-gray-700 font-medium">Attributes (JSON format):
            <textarea 
              value={attributes} 
              onChange={(e) => setAttributes(e.target.value)} 
              required  
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out h-24"
            />
          </label>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">Evaluate</button>
        {wrong && <p className="mt-4 p-4 bg-red-100 border border-red-400 text-red-800 rounded-md">Error evaluating rule!</p>}
        {message && <p className="mt-4 p-4 bg-green-100 border border-green-400 font-semibold text-green-800 rounded-md">Result: {message}</p>}
      </form>
    </div>
  );
}

export default EvaluateRule;
