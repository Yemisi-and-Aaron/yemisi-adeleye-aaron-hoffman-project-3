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
  //  These states will store API results when they arrive
  const [recipes, setRecipes] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState({});

  // Listen for click on find recipes button
  const handleClick = (event, ingredient) => {
    event.preventDefault();
    // Empty full recipe 
    setRecipeDetails({});
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
  const getRecipeDetails = (recipeNumber) => {

    // We pass recipeNumber to the url for the API call
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

//  This state holds faveRecipes list from firebase
const [faveRecipes, setFaveRecipes] = useState([]);

useEffect( () => {
  
  const dbRef = firebase.database().ref();

  dbRef.on('value', (response) => {
    //  Empty array to push recipes into
    const favesArray = [];
    //  Response from firebase
    const data = response.val();

    //  Push an object into the array for each recipe
    for (let key in data) {
        favesArray.push({
          key: key,
          name: data[key].name,
          id: data[key].id
        });
      }
      //  Set fave recipes to the new array
      setFaveRecipes(favesArray);
  })
}, [])

  
  return (
    <div className="App">
      <div className="headerContainer wrapper">
        <Header />
        <Form buttonClick={handleClick} />
        </div>
      <ul className="recipesList wrapper" onClick={(e) => getRecipeDetails(e.target.classList[0])}>
        {/* If there is a response from the api, map through and display, otherwise print an error messsage  */}
        {
          recipes ? (
          recipes.map( (individualRecipe) => {
            return(
              <Result recipeResult={individualRecipe} key={individualRecipe.idMeal}/>
            )
          })) : (
            <p className="noResultsP">We couldn't find any results, try again!</p>
          )
        }
      </ul>
      <IndividualRecipe recipeDetails={recipeDetails} />
      <FaveRecipes recipesArray={faveRecipes} getRecipeDetails={getRecipeDetails} />
      <Footer />
    </div>
  );
}

export default App;
