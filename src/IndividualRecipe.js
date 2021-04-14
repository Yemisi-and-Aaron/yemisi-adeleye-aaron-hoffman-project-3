import firebase from './firebase.js';

const IndividualRecipe = ({ recipeDetails }) => {

    //  Empty array to push ingredients to
    const ingredientArray = [];

    //  Recipes from the API have up to 20 ingredients
    for(let i = 1; i <= 20; i++) {
        const ingredient =`strIngredient${i}`
        const measure = `strMeasure${i}`;
        
        //  Check how many the recipe in question has and push a string to the array for each one
        if (recipeDetails[ingredient]) {
            ingredientArray.push(`${recipeDetails[ingredient]}: ${recipeDetails[measure]}`);
        }    
    }
    //  When user clicks save for later button push recipe to firebase
    const saveRecipe = () => {
        const dbRef = firebase.database().ref();
        dbRef.push({
            name: recipeDetails.strMeal,
            id: recipeDetails.idMeal
        });
    }
    
    return(
        
    <div className="fullRecipe wrapper">
        <h2>{recipeDetails.strMeal}</h2>
        <div className="flexContainer">
            <div className="imgContainer">
                <img src={recipeDetails.strMealThumb} alt={recipeDetails.strMeal} />
            </div>
            <ul>
                {ingredientArray.map( (ingredientItem, index) => {
                    return(
                        <li key={index}>{ingredientItem}</li>
                    )
                })}
            </ul>
        </div>
        <p>{recipeDetails.strInstructions}</p>
        {/* Conditionally display save button only when we are displaying recipe details */}
        {recipeDetails.strMeal ? (
            <div className="saveButtonContainer">
                <button className="saveButton" onClick={saveRecipe}>Save for later</button>
            </div>
            ) : (      
                null
        )}
    </div>
    )
}

export default IndividualRecipe;