import React, { Component } from "react";
import "./style.css"
import Button from "../../Button/Button";
import DashboardNewsCard from "../../DashboardNewsCard/DashboardNewsCard";
import Sidebar from "../../Sidebar/Sidebar";
import Search from "../../ClientSearch/SearchForm/SearchFunctions/SearchFunctions";

class PlannerInfoPage extends Component {
    render() {
        return (
            <div className="container-fluid h-100 p-0 m-0">
                <Sidebar />
                <div className="content">
                    <Button text={"Show Assets and Liabilities"} />
                    <Button text={"Print Record of Advice"} />
                    <Search />
                    <DashboardNewsCard />
                </div>
            </div>
        );
    }
}

export default PlannerInfoPage;