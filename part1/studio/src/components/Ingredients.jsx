import React from 'react';
import styles from './Ingredients.module.css';

class RecipeIngredients extends React.Component{
    render() {
        const ingredients = ["5 strips uncooked bacon", "1 Large Yellow Onion", "1 Red Bell Pepper", "3 Cloves Garlic", "1 Pound Ground Beef"]
        return(
            <div>
                <h3>Chili Ingredients</h3>
                <ul className= {styles.ingredientList}>
                    <li>{ingredients[0]}</li>
                    <li>{ingredients[1]}</li>
                    <li>{ingredients[2]}</li>
                    <li>{ingredients[3]}</li>
                    <li>{ingredients[4]}</li>
                </ul>
            </div>
        );
    }
}

export default RecipeIngredients;