import './App.css';
import Header from './Header.js';
import Form from './Form.js';
import Result from './Result.js';
import IndividualRecipe from './IndividualRecipe';
import FaveRecipes from './FaveRecipes';
import Footer from './Footer.js';
import { useEffect, useState } from 'react';
import firebase from './firebase.js';

function App() {
  //  This state will store API results when they arrive
  const [recipes, setRecipes] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState({});

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
        
        setRecipes(jsonResponse.meals);
      })
  }

  // Listen for click and get recipe details for the recipe that is clicked on
  const getRecipeDetails = (event) => {
    //  When the user clicks a recipe 
    const recipeNumber = event.target.classList[0];
   
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
        setRecipeDetails(jsonResponse.meals[0]);
      })

      // Set recipes to []
      setRecipes([]);
  }

 const [faveRecipes, setFaveRecipes] = useState([]);

 useEffect( () => {
  const dbRef = firebase.database().ref();

  dbRef.on('value', (response) => {
    const favesArray = [];
    const data = response.val();

    for (let key in data) {
        favesArray.push({
          key: key,
          name: data[key]
        });
      }
      setFaveRecipes(favesArray);
  })
 }, [])

  
  return (
    <div className="App">
      <div className="headerContainer wrapper">
        <Header />
        <Form buttonClick={handleClick} />
        </div>
      {/* Some kind of if statement to handle no response from the API */}
      <ul className="recipesList wrapper" onClick={getRecipeDetails}>
        {
          recipes.map( (individualRecipe) => {
            return(
              <Result recipeResult={individualRecipe} key={individualRecipe.idMeal}/>
            )
          })
        }
      </ul>
      <IndividualRecipe recipeDetails={recipeDetails} />
      <FaveRecipes recipesArray={faveRecipes} />
      <Footer />
    </div>
  );
}

export default App;
