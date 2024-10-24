import React,  { useState }  from 'react';
import CreateRule from './Components/CreateRule';
import CombineRules from './Components/CombineRules';
import EvaluateRule from './Components/EvaluateRule';
import './App.css';

const App = () => {

  const [ActiveComponent, setActiveComponent] = useState('cre');

  return (
    <>
     <div className="bg-gradient-to-r from-teal-500 to-blue-400 min-h-screen flex flex-col items-center justify-center p-4 sm:p-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6 text-center"> Rule Engine with AST</h1>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mb-8">
          <button className="h-12 sm:h-14 px-4 sm:px-6 py-2 bg-blue-600 text-lg sm:text-xl text-white font-semibold rounded-lg hover:bg-blue-500 transform transition duration-300 hover:scale-105 active:scale-125 focus:outline-none" onClick={() => setActiveComponent('cre')}> Create Rule </button>
          <button className="h-12 sm:h-14 px-4 sm:px-6 py-2 bg-green-600 text-lg sm:text-xl text-white font-semibold rounded-lg hover:bg-green-500 transition duration-300 ease-in-out transform hover:scale-105 active:scale-125 focus:outline-none" onClick={() => setActiveComponent('comb')}> Combine Rule </button>
          <button className="h-12 sm:h-14 px-4 sm:px-6 py-2 bg-red-600 text-lg sm:text-xl text-white font-semibold rounded-lg hover:bg-red-500 transition duration-300 ease-in-out transform hover:scale-105 active:scale-125 focus:outline-none" onClick={() => setActiveComponent('eval')}> Evaluate Rule </button>
        </div>
        <div className='w-full max-w-4xl'>
          {
            ActiveComponent === 'cre' && (
              <div className="transition-opacity duration-500 ease-in opacity-100">
                <CreateRule />
              </div>  
            )}
          {
            ActiveComponent === 'comb' && (
              <div className="transition-opacity duration-500 ease-in opacity-100">
                <CombineRules />
              </div>
            )}
          {
            ActiveComponent === 'eval' && (
            <div className="transition-opacity duration-500 ease-in opacity-100">
              <EvaluateRule />
            </div>
          )}
        </div>
     </div>
    </>
  )
}

export default App;