import React from "react";
// import Status from "../Booking/Status";
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="body">
        <div className="wrapper">
            <div className="grid-header">
                Good Morning Monica
            </div>
            <div className="first">
                <div className="logo-image">EduCore</div>
                <ul className="navigation">
                    <li className="home">
                        <a href="!#">Home</a>
                    </li>
                    <li className="booking">
                        <a href="!#">Booking</a>
                    </li>
                    <li className="profile">
                        <a href="!#">Profile</a>
                    </li>
                </ul>
            </div>
            <div className="second">
                <div className="second-header">
                    <span className="current-booking">Current Bookings</span>
                    <span className="class-num"> Class 6th</span>
                </div>
                <ul className="second-list-body">
                    <li className="list-header">
                        <div>Name</div>
                        <div>Date Of Submission</div>
                        <div> Status</div>
                    </li>
                    <li className="list-one">
                        <div>Ang Amith</div>
                        <div>Dec 17 , 2021</div>
                        <div> 
                            <button className="active">Active</button>
                            </div>
                    </li>
                    <li className="list-two">
                        <div>Lucos Jones</div>
                        <div>Dec 17,2021</div>
                        <div> 
                        <button className="active">Active</button>
                        </div>
                    </li>
                    <li className="list-three">
                        <div>Roy K Michle</div>
                        <div>Dec 16,2021</div>
                        <div>
                            <button className="opended">Opended</button></div>
                    </li>
                    <li className="list-four">
                        <div>Wilson</div>
                        <div>Dec 16,2021</div>
                        <div>
                            <button className="completed">Completed</button></div>
                    </li>
                </ul>
            </div>
            <div className="third">
                <ul className="information" >
                    <li className="profile-info">
                        <div className="profile-pic">
                            <p>DP</p>
                        </div>

                        <div className="profile-bio">
                            <div className="profile-name">
                                _Name.
                            </div>
                            <div className="profile-profession">
                                Profession
                            </div>
                        </div> 
                    </li>
                    <li className="calender">
                            {/* <div class="container">
                                <div class="calendar">
                                    <div class="month">
                                    <i class="fas fa-angle-left prev"></i>
                                    <div class="date">
                                        <h4>December 2021</h4>
                                    </div>
                                    <i class="fas fa-angle-right next"></i>
                                    </div>
                                    <div class="weekdays">
                                    <div>Sun</div>
                                    <div>Mon</div>
                                    <div>Tue</div>
                                    <div>Wed</div>
                                    <div>Thu</div>
                                    <div>Fri</div>
                                    <div>Sat</div>
                                    </div>
                                    <div class="days">
                                        <div className="prev-date">26</div>
                                        <div className="prev-date">27</div>
                                        <div className="prev-date">28</div>
                                        <div className="prev-date">29</div>
                                        <div className="prev-date">30</div>

                                        <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div>
                                        <div>6</div><div>7</div><div>8</div><div>9</div><div>10</div>
                                        <div>11</div><div>12</div><div>13</div><div>14</div><div>15</div>
                                        <div>16</div><div>17</div><div>18</div><div>19</div><div>20</div>
                                        <div>21</div><div>22</div><div>23</div><div>24</div><div>25</div>
                                        <div>26</div><div>27</div><div>28</div><div>29</div><div>30</div>
                                        <div>31</div>

                                        <div className="next-date">1</div>
                                        <div className="next-date">2</div>
                                        <div className="next-date">3</div>
                                        <div className="next-date">4</div>
                            
                                        

                                    </div> */}
                                    

                                {/* </div>
                            </div> */}
                            
                            <input type="date"></input>
                        
                    </li>
                </ul>
            </div>
            <div className="fourth">
                <textarea></textarea>
            </div>
        </div>
    
    </div>

  );
}

export default Dashboard;