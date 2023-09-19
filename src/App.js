import logo from './logo.svg';
import './App.css';
import { useState } from 'react';






function App() {

  const [mojBroj, setMojBroj] = useState (5);


  return (
    <div className="App">

    {mojBroj}

    <button onClick={() => setMojBroj((prev) => prev + 1)}
    >addsfdgfgfgf</button>


      



    </div>
  );
}

export default App;
