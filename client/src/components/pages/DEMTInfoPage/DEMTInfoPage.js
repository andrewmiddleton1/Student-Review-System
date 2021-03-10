import React, { Component } from "react";
import "./style.css"
import Button from "../../Button/Button";
// import DashboardNewsCard from "../../DashboardNewsCard/DashboardNewsCard";
import Sidebar from "../../Sidebar/Sidebar";
import StudentSearch from "../../ClientSearch/SearchFunctions/StudentSearch";

import Item from "../../Sidebar/Item";
import FeedbackSearch from "../../ClientSearch/SearchFunctions/FeedbackSearch";



class DEMTInfoPage extends Component {
    render() {
        return (
            <div className="container-fluid h-100 p-0 m-0">
                <Sidebar />
                <div className="content">
                    {/* <Button text={"Show Assets and Liabilities"} /> */}
                    <Button text={"Create Word Doc Summary of Feedback"}
                        href={"/createroa"} />
                    <h1 className="text-center">Welcome to the DEMT Tools Section</h1>

                    {/* <Item active={''} className="flex-item"
                        href={"/clientincome"}
                        icon={<i className="fas fa-folder-minus" />}
                        text={<span>Add Student</span>} /> */}

                    <Button text={"Add New Trainee"}
                        href={"/studentinput"} />


                    <StudentSearch />
                    <br></br>
                    <FeedbackSearch />
                </div>
            </div>
        );
    }
}

export default DEMTInfoPage;