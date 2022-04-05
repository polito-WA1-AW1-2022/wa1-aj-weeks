import { Button } from "react-bootstrap";

function MyButton(props) {
    const message = props.text ;
    return <Button>{message}</Button> ;
}

export default MyButton ;