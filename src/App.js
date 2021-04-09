import './App.css';
import Header from './Header.js';
import Form from './Form.js';
import { useState } from 'react';

function App() {
 
  const [recipes, setRecipes] = useState([]);

  const handleClick = (event, ingredient) => {
    event.preventDefault();
    console.log(ingredient);
  }
  
  return (
    <div className="App">
      <Header />
      <Form buttonClick={handleClick} />
    </div>
  );
}

export default App;
