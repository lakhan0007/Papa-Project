import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function NewCard(props) {
  console.log(props?.CardData);
  return (
    <>
      {props?.CardData?.map((value) => {
        return (
          <Card style={{ width: "250px" }} className="mx-3 my-5">
            <Card.Img
              variant="top"
              src={value?.image}
              style={{ height: "200px" }}
            />
            <Card.Body>
              <Card.Title className="text-center">{value?.title}</Card.Title>
              <Card.Text>{value?.text}</Card.Text>
              <Button variant="primary">{value?.button}</Button>
            </Card.Body>
          </Card>
        );
      })}

      <Card style={{ width: "250px" }} className="mx-3 my-5">
        <Card.Img variant="top" src={props?.image} style={{ height: "200px" }} />
        <Card.Body>
          <Card.Title className="text-center">{props?.title}</Card.Title>
          <Card.Text>{props?.text}</Card.Text>
          <Button variant="primary">{props?.button}</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default NewCard;