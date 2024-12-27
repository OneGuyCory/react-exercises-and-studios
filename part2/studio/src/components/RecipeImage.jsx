import recipedata from "./recipe.json";
import "./styling.css";

function RecipeImage() {
 const recipeImage = recipedata.map(recipe =>
  <div key={recipe.recipeImage}>
    <img src={recipe.recipeImage} alt={recipe.name} className="recipeImage"/>
  </div>
  )
  return <div>{recipeImage}</div>
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
