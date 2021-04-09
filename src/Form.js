import { useState } from 'react';

const Form = ( {buttonClick} ) => {
    const [ingredient, setIngredient] = useState('');

    return(
        <form action="">
            <label htmlFor="ingredient">Select an ingredient:</label>
            <input type="text" id="ingredient" onChange={(event) =>  {setIngredient(event.target.value)} } />
            <button onClick={() => buttonClick(ingredient)}>Find recipes!</button>
        </form>
    )
}

export default Form;