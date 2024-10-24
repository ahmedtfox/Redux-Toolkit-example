import { Col, Row, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setName } from "./counter/counterSlice";
function InputText() {
  const dispatch = useDispatch();
  return (
    <>
      <Row>
        <Col md={{ span: 6, offset: 3 }} className="justify-content-center">
          <Form.Label htmlFor="inputName">Name</Form.Label>
          <Form.Control
            style={{ width: "auto" }}
            type="text"
            id="inputName"
            aria-describedby="passwordHelpBlock"
            onChange={(e) => {
              dispatch(setName(e.target.value));
            }}
          />
        </Col>
      </Row>
    </>
  );
}

export default InputText;
