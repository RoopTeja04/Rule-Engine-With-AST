import React, { useState } from 'react';
import axios from 'axios';

const CombineRules = () => {
  const [rules, setRules] = useState([{ ruleName: '', operator: 'AND' }]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleAddRule = () => {
    setRules([...rules, { ruleName: '', operator: 'AND' }]);
    setMessage(false);
  };

  const handleRemoveRule = (indexToRemove) => {
    const updatedRules = rules.filter((_, index) => index !== indexToRemove);
    setRules(updatedRules);
  };

  const handleRuleChange = (index, field, value) => {
    const newRules = [...rules];
    newRules[index][field] = value;
    setRules(newRules);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const ruleNames = rules.map(rule => rule.ruleName).filter(name => name);
    const operators = rules.map(rule => rule.operator).filter((_, index) => index > 0);

    if (ruleNames.length < 2) {
      setError('Please enter at least two rules to combine.');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:5000/combine_rules', {
        rules: ruleNames,
        operators: operators
      });
      setMessage(response.data.combined_rule);
    } catch (error) {
      console.error('Error Combining Rules:', error);
      const errorMessage = error.response && error.response.data && error.response.data.message 
                            ? error.response.data.message 
                            : 'An unexpected error occurred';
      setError('Error Combining Rules: ' + errorMessage);
    }
  };

  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Combine Rules</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {rules.map((rule, index) => (
          <div key={index} className="space-y-2">
            <label className="block text-gray-700">
              Rule {index + 1}:
              <input
                type='text'
                value={rule.ruleName}
                onChange={(e) => handleRuleChange(index, 'ruleName', e.target.value)}
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
              />
              {index > 0 && (
                <div>
                  <label className="block text-gray-700">
                    Operator:
                    <select
                      value={rule.operator}
                      onChange={(e) => handleRuleChange(index, 'operator', e.target.value)}
                      className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300 ease-in-out cursor-pointer"
                    >
                      <option value="AND">AND</option>
                      <option value="OR">OR</option>
                    </select>
                  </label>
                  <button type="button" onClick={() => handleRemoveRule(index)} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out mt-4">Remove</button>
                </div>
              )}
            </label>
          </div>
        ))}
        <button type="button" onClick={handleAddRule} className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105">Add Another Rule</button>
        <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">Combine Rules</button>
        {message && <p className="mt-4 p-4 bg-green-100 border border-green-400 font-semibold text-green-800 rounded-md">Combined Rules: {message}</p>}
        {error && <p className="mt-4 p-4 bg-red-100 border border-red-400 font-semibold text-red-800 rounded-md">{error}</p>}
      </form>
    </div>
  );
};

export default CombineRules;