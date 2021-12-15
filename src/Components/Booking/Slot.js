import React from "react";
import './Slot.css';

function Slot({slotType, amount}){
    return(
        <div className="slots">
            <ul>
                <li className="slot1">
                    <div className="slotName">{slotType[0]}</div>
                    <div className="amount">{amount[0]}</div>
                </li>
                <li className="slot1">
                    <div className="slotName">{slotType[1]}</div>
                    <div className="amount">{amount[1]}</div>
                </li>
                <li className="slot1">
                    <div className="slotName">{slotType[2]}</div>
                    <div className="amount">{amount[2]}</div>
                </li>
            </ul>
        </div>
        
    );
}

export default Slot;