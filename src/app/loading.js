import React from "react";
import Spinner from "react-bootstrap/Spinner";

export default function Loading() {
  return (
    <>
      <h1>Loading .......</h1>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </>
  );
}
