

const Result = ( {recipeResult } ) => {
    return(
        <li className="result">
            <h3 className={recipeResult.idMeal}>{recipeResult.strMeal}</h3>
            {/* <div className="imgContainer"> */}
                <img src={recipeResult.strMealThumb} alt={recipeResult.strMeal} className={recipeResult.idMeal}/>
            {/* </div> */}
        </li>
    )
}

export default Result;