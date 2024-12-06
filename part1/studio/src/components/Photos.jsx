import React from "react";
import styles from './Description.module.css';

class RecipePhoto extends React.Component {
    render() {
        return(
            <img src="https://sugarspunrun.com/wp-content/uploads/2018/09/The-Best-Chili-Recipe-1-of-1-3.jpg" alt="Chili Photo" className= {styles.imageUpdates}/>
        );
    }
}

export default RecipePhoto;