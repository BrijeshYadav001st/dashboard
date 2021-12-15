import React from "react";
import Timeslot from "./Timeslot";
import Slot from "./Slot";
import './Status.css'

function Status(){
    return(
        <div className="status-container">
            <div className="status-body">
                <div className="input-date">
                    <div className="select-day">Select a day</div>
                    <input type="date" name="date" id="date" />
                </div>
                <div className="status-body-text">Choose one of the available timeslots</div>
                <div className="select-time">
                    <div className="one"><Timeslot time={"12:00"}/></div>
                    <div className="two"><Timeslot time={"12:30"}/></div>
                    <div className="three"><Timeslot time={"13:00"}/></div>
                    <div className="four"><Timeslot time={"13:30"}/></div>
                    <div className="five"><Timeslot time={"14:00"}/></div>
                    <div className="six"><Timeslot time={"14:30"}/></div>
                    <div className="seven"><Timeslot time={"15:00"}/></div>
                    <div className="eight"><Timeslot time={"15:30"}/></div>
                    <div className="nine"><Timeslot time={"16:00"}/></div>
                    <div className="ten"><Timeslot time={"18:00"}/></div>
                    <div className="eleven"><Timeslot time={"18:30"}/></div>
                    <div className="twelve"><Timeslot time={"19:00"}/></div>
                    <div className="twelve"><Timeslot time={"19:30"}/></div>
                </div>
                <div className="status-note">
                    <div className="status-note-header">info about available timeslots</div>
                    <div className="status-slots">
                        <Slot slotType={["Regular slots","Premium slots","Prime slots"]} amount={["Free","INR 134","INR 254"]}/>
                    </div>
                </div>
                <div className="save-cont-btn">Save and continue</div>
            </div>
        </div>
    );
}

export default Status;