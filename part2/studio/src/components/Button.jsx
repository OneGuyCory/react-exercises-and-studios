import "./styling.css"
import "./ClickedButton"
import "./SaveButton"
import SaveButton from "./SaveButton";
import ClickedButton from "./ClickedButton";

function Button(props) {
  const saveButton = props.saveButton;
   return saveButton ? <SaveButton /> : <ClickedButton />;
 }
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 