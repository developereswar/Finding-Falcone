import React, { useEffect, Fragment, useState } from "react";
import Axios from "axios";

import { Col, Input } from "reactstrap";
const Planets = (props) => {
  const [planets, setPlanet] = useState([]);
  const [distance, setDistance] = useState(0);
  useEffect(() => {
    getData();
  }, []);

  const getData = function () {
    let URL = "https://findfalcone.herokuapp.com/planets";
    Axios.get(URL)
      .then((e) => {
        setPlanet(e.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Fragment>
      <Col md="12">
        <h1 className="my-5 float-left">
          Select planets you want to search in :
        </h1>
      </Col>
      <Col sm='3'>
      <Input type="select" name="select" id="exampleSelect">
        {planets.length
          ? planets.map((palentdata, index) => {
              return (
                <option
                  onClick={() => {
                    setDistance(palentdata.distance);
                  }}
                  key={index}
                  value={palentdata.name}
                >
                  {palentdata.name}
                </option>
              );
            })
          : "No Data"}
      </Input>
      </Col>

      <Col sm='3'>
      <Input type="select" name="select" id="exampleSelect">
        {planets.length
          ? planets.map((palentdata, index) => {
              return (
                <option
                  onClick={() => {
                    setDistance(palentdata.distance);
                  }}
                  key={index}
                  value={palentdata.name}
                >
                  {palentdata.name}
                </option>
              );
            })
          : "No Data"}
      </Input>
      </Col>

      <Col sm='3'>
      <Input type="select" name="select" id="exampleSelect">
        {planets.length
          ? planets.map((palentdata, index) => {
              return (
                <option
                  onClick={() => {
                    setDistance(palentdata.distance);
                  }}
                  key={index}
                  value={palentdata.name}
                >
                  {palentdata.name}
                </option>
              );
            })
          : "No Data"}
      </Input>
      </Col>


      <Col sm='3'>
      <Input type="select" name="select" id="exampleSelect">
        {planets.length
          ? planets.map((palentdata, index) => {
              return (
                <option
                  onClick={() => {
                    setDistance(palentdata.distance);
                  }}
                  key={index}
                  value={palentdata.name}
                >
                  {palentdata.name}
                </option>
              );
            })
          : "No Data"}
      </Input>
      </Col>
    </Fragment>
  );
};

export default Planets;
