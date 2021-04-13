import firebase from './firebase';

const FaveRecipes = ({recipesArray}) => {
    console.log(recipesArray);
    
    return(
        <section>
            <h2>Favorite Recipes</h2>
            <ul>
                {recipesArray.map( (recipe) => {
                    <li key={recipe.key}>{recipe.name}</li>
                })}
            </ul>
        </section>
    )
}

export default FaveRecipes;