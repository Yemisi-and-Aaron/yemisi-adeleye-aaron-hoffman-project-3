import firebase from './firebase';

const FaveRecipes = ({recipesArray, getRecipeDetails}) => {
    //  When user clicks the delete button remove the recipe from firebase
    const removeRecipe = (key) => {
        const dbRef = firebase.database().ref();
        dbRef.child(key).remove();
    }

    return(
        <section>
            <h2>Favorite Recipes</h2>
            <ul className="faveRecipeUl wrapper">
                {recipesArray.map( (recipe) => {
                    return(    
                        <li key={recipe.key}>
                            {/* When user clicks on the title display full recipe details on the page */}
                            <p  id={recipe.id} onClick={ (e) => getRecipeDetails(e.target.id)}>{recipe.name}</p>
                        
                            <button className={recipe.key} onClick={ (e) => { removeRecipe(e.target.classList[0])}}>Delete</button>
                        </li>       
                    )
                })}
            </ul> 
        </section>
    )
}

export default FaveRecipes;
