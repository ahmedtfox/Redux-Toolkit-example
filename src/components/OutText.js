import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";

function OutText() {
  const value = useSelector((state) => {
    return state.counterData.name;
  });
  return (
    <>
      <Row>
        <h2>{value}</h2>
      </Row>
    </>
  );
}

export default OutText;
