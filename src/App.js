import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import { useEffect } from 'react';

function App() {
  

  useEffect(() => {
    document.body.style.backgroundImage = `linear-gradient(265deg, rgba(125,166,251,1) 22%, rgba(0,0,0,1) 89%)`
  })
  return (
    <div className="mt-3">
      <h1 className=' text-5xl text-center text-green-600 animate-bounce font-extrabold'>Chuck Norries</h1>
      <Card/>
    </div>
  );
}

export default App;
