import React from "react";

const Distance = (props) =>{
    let distance = null||props.PlanetDist;
    return(
            <h1>
                <br/>
           {distance || "0 Miles" }
           </h1>
    )
}

export default Distance;