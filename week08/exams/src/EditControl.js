import { Button } from "react-bootstrap";

function EditControl(props) {

    return         <p align='right'>{props.editable ?
        <Button variant="outline-secondary" onClick={()=>{props.toggleEditable()}}>View</Button> :
        <Button variant="outline-secondary" onClick={props.toggleEditable}>Change</Button>}</p> ;

}

export default EditControl;