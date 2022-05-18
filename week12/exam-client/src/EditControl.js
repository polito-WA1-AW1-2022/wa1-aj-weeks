import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function EditControl(props) {

    const navigate = useNavigate();

    return <p align='right'>
        {props.editable ?
            <Button variant="outline-secondary" onClick={() => { navigate('/') }}>View</Button> :
            <Button variant="outline-secondary" onClick={() => { navigate('/change') }}>Change</Button>}
    </p>;

}

export default EditControl;