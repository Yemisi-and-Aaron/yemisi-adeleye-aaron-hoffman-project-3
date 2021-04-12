

const Result = ( {recipeResult } ) => {
    return(
        <li className="result" id={recipeResult.idMeal}>
            <h3>{recipeResult.strMeal}</h3>
            <div className="imgContainer">
                <img src={recipeResult.strMealThumb} alt={recipeResult.strMeal}/>
            </div>
        </li>
    )
}

export default Result;