import React from "react";
import { Accordion } from "react-bootstrap";

function CommonAccordion(props) {
  const { title, children } = props;
  return (
    <>
      <Accordion className="my-2">
        <Accordion.Item eventKey="0">
          <Accordion.Header>{title}</Accordion.Header>
          <Accordion.Body>{children}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default CommonAccordion;
