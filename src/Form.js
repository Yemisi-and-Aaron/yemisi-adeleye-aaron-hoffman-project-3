import { useState } from 'react';

const Form = ( {buttonClick} ) => {

    //  This state stores the current value in the input
    const [ingredient, setIngredient] = useState('');

    return(
        <form action="">
            <div className="labelInput">
                <label htmlFor="ingredient">Select an ingredient:</label>
                <input type="text" id="ingredient" onChange={(event) =>  {setIngredient(event.target.value)} } />
            </div>
            {/* Button sends an API call using the current value in the input */}
            <button onClick={(event) => buttonClick(event, ingredient)}>Find recipes!</button>
        </form>
    )
}

export default Form;