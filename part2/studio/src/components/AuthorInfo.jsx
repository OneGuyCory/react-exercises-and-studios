import recipeData from "./recipe.json";
import "./styling.css";

function AuthorInfo() {
  const recipeAuthor = recipeData.map(recipe =>
    <div key={recipe.author}>
      <p>{recipe.author}</p>
    </div>
  )

  const recipeAuthorImage = recipeData.map (recipe =>
    <div key={recipe.authorImage}>
      <img src={recipe.authorImage} alt={recipe.author} className="authorImage"/>
    </div>
  )

  const recipeWebsite = recipeData.map (recipe =>
    <div key={recipe.website}>
      <a href={recipe.website}>{recipe.website}</a>
    </div>
  )

  return (
    <div>
       {recipeAuthorImage}
       {recipeAuthor}
       {recipeWebsite}
    </div>
 );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 function RecipeImage() {
  const recipeImage = recipedata.map(recipe =>
   <div key={recipe.recipeImage}>
     <img src={recipe.recipeImage} alt={recipe.name} className="recipeImage"/>
   </div>
   )
   return <div>{recipeImage}</div>
  }