import { useState } from "react";
import { Badge, Button, Col, Container, Row } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";

import { addOne, minusOne } from "./counterSlice";

export default function Counter() {
  const actions = useDispatch();
  const value = useSelector((state) => {
    return state.counterData.count;
  });

  return (
    <>
      <Container className="my-5">
        <Row>
          <Col>
            <Button
              onClick={() => {
                actions(addOne());
              }}
              variant="success"
            >
              Add
            </Button>
          </Col>
          <Col>
            <h2>
              <Badge style={{ width: "200px" }}>{value}</Badge>
            </h2>
          </Col>
          <Col>
            <Button
              onClick={() => {
                actions(minusOne());
              }}
              variant="danger"
            >
              Sub
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
