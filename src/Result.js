

const Result = ( {recipeResult, key} ) => {
    return(
        <li className="result" id={recipeResult.idMeal}>
            <h2>{recipeResult.strMeal}</h2>
            <img src={recipeResult.strMealThumb} alt={recipeResult.strMeal}/>
        </li>
    )
}

export default Result;