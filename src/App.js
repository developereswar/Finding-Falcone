import React from "react";
import "./styles.css";

import Planets from "./Component/Planets";
import { Row, Container } from "reactstrap";
import Header from "./Component/Header";
export default function App() {
  return (
    <div className="App">
         <Header />
      <Container>
     

        <Row></Row>
      </Container>

      <Planets />
    </div>
  );
}
