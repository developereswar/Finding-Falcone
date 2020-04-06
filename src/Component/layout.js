import React from 'react';
import Planets from "./Planets";
import { Row, Container } from "reactstrap";
import Header from "./Header";
import { Route, Link, Switch, Redirect } from 'react-router-dom';

 function Layout(){
    return(
        <div className="App">
        <Header />
        <Container>
          <Row>
            <Switch>
            <Route path="/" component={Planets} />
              <Route path="/login" Redirect="/" />
              <Route path="/home" component={Planets} />
            </Switch>
          </Row>
        </Container>
      </div>
    )
}

export default Layout;