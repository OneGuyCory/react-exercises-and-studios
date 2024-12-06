import React from 'react';
import styles from './Description.module.css';


class RecipeAuthor extends React.Component {
    render() {
        const authorLink = "https://sugarspunrun.com/best-chili-recipe/";
        const authorPhoto = "https://sugarspunrun.com/wp-content/uploads/2021/02/SquareImage_Sam.jpg";
        const authorName = "Sam Merrit";

        return (
            <div className = {styles.recipeAuthorBlock}>
               <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
               <div>
                  <h3>{authorName}</h3>
                  <a href={authorLink}>Sugar Spun Run</a> 
               </div>
            </div>
         );
    }
    
}

class RecipeDescription extends React.Component{
    render() {
        return(
<div> 
   <div>
      <h1>Best Chili</h1>
      <p>Award winning chili recipe featuring great flavors from bacon and fresh peppers!</p>
   </div>
   <RecipeAuthor />
</div>
        )
    }
}

export default RecipeDescription;