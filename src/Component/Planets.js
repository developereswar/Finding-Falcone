import React, { useEffect, Fragment, useState } from "react";
import Axios from "axios";

import { Col, Button } from "reactstrap";
import Distance from "./Distance";
const Planets = props => {
  const [planets, setPlanet] = useState([]);
  const [distance, setDistance]=useState(0)
  useEffect(() => {
    getData();
  });

  const getData = function() {
    let URL = "https://findfalcone.herokuapp.com/planets";
    Axios.get(URL)
      .then(e => {
        setPlanet(e.data);
      })
      .catch(err => {
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

      {planets.length
        ? planets.map((palentdata, index) => {
            return <Button onClick={()=>{ setDistance(palentdata.distance) }} key={index}>{palentdata.name}</Button>;
          })
        : "No Data"}

        <Distance  PlanetDist= {distance} />
    </Fragment>
  );
};

export default Planets;
