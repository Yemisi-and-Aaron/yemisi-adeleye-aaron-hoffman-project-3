import firebase from './firebase.js';

const IndividualRecipe = ({ recipeDetails }) => {

    const ingredientArray = [];

    for(let i = 1; i <= 20; i++) {
        const ingredient =`strIngredient${i}`
        const measure = `strMeasure${i}`;

        if (recipeDetails[ingredient]) {
            ingredientArray.push(`${recipeDetails[ingredient]}: ${recipeDetails[measure]}`);
        }    
    }
    
    const saveRecipe = () => {
        const dbRef = firebase.database().ref();
        dbRef.push({
            name: recipeDetails.strMeal,
            id: recipeDetails.idMeal
        });
    }
    console.log(recipeDetails.strMeal);
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

        {recipeDetails.strMeal ? (
            <button className="saveButton" onClick={saveRecipe}>Save for later</button>
            ) : (
                
                null
            

        )}
    </div>
    )
}

export default IndividualRecipe;