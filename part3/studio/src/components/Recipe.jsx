import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://sugarspunrun.com";
   let authorPhoto = "https://sugarspunrun.com/wp-content/uploads/2021/02/SquareImage_Sam.jpg";
   let authorName = "Sam Merritt";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["Flour", "Sugar", "Baking Powder", "Baking Soda", "Buttermilk"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Buttermilk Pancakes</h1>
            <p>I’ve got breakfast covered today with my classic Buttermilk Pancakes recipe — made completely from scratch (and tips to make them if you don’t have buttermilk, too!)!  I’ll be showing you how to make thick, fluffy pancakes that can be ready in under 15 minutes! Recipe includes a how-to video!</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://sugarspunrun.com/wp-content/uploads/2019/03/Best-buttermilk-pancake-recipe-14-of-16.jpg" alt="" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
