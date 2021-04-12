const IndividualRecipe = ({ recipeDetails }) => {

    const ingredientArray = [];

    for(let i = 1; i <= 20; i++) {
        const ingredient =`strIngredient${i}`
        const measure = `strMeasure${i}`;

        if (recipeDetails[ingredient]) {
            ingredientArray.push(`${recipeDetails[ingredient]}: ${recipeDetails[measure]}`);
        }
        
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
    </div>
    )
}

export default IndividualRecipe;