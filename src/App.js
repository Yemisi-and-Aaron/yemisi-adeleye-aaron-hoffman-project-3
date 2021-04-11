import './App.css';
import Header from './Header.js';
import Form from './Form.js';
import Result from './Result.js';
import { useState } from 'react';

function App() {
  //  This state will store API results when they arrive
  const [recipes, setRecipes] = useState([]);

  // Listen for click on find recipes button
  const handleClick = (event, ingredient) => {
    event.preventDefault();
    // call API with current value of ingredient
    const url = new URL('https://www.themealdb.com/api/json/v1/1/filter.php')
    url.search = new URLSearchParams({
        i: ingredient
    })

    fetch(url)
      .then(function(response) { 
        return response.json();
      })
      .then(function(jsonResponse) {
        console.log(jsonResponse.meals);
        setRecipes(jsonResponse.meals);
      })
  }

  // Listen for click and get recipe details for the recipe that is clicked on
  const getRecipeDetails = (event) => {
    //  When the user clicks a recipe 
    const recipeNumber = event.target.parentNode.id;
    // We need get the ID of the recipe and pass it to the API call
    const url = new URL('https://www.themealdb.com/api/json/v1/1/lookup.php')
    url.search = new URLSearchParams({
        i: recipeNumber
    })

    fetch(url)
      .then(function(response) { 
        return response.json();
      })
      .then(function(jsonResponse) {
        console.log(jsonResponse);
      })
      // Maybe here set recipes to []
      // make a component for full recipe and put all the stuff in there
  }
  
  return (
    <div className="App">
      <Header />
      <Form buttonClick={handleClick} />
      {/* Some kind of if statement to handle no response from the API */}
      <ul onClick={getRecipeDetails}>
        {
          recipes.map( (individualRecipe) => {
            return(
              <Result recipeResult={individualRecipe} key={individualRecipe.idMeal}/>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
