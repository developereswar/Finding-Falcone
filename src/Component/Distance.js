import React from "react";

const Distance = (props) =>{
    let distance = null||props.PlanetDist;
    return(
           distance || "0 Miles" 
    )
}

export default Distance;