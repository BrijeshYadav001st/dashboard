import React from "react";
import './Timeslot.css';

function Timeslot({time}){
    return(
        <button className="btn">{time}</button>
    );
}

export default Timeslot;