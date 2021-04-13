import firebase from './firebase';

const FaveRecipes = ({recipesArray, getRecipeDetails}) => {
    
    return(
        <section>
            <h2>Favorite Recipes</h2>
            <ul>
                {recipesArray.map( (recipe) => {
                    return(
                    <li key={recipe.key} id={recipe.id}  onClick={ (e) => getRecipeDetails(e.target.id)}>{recipe.name}</li>
                    )
                })}
            </ul>
        </section>
    )
}

export default FaveRecipes;
