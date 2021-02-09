import React, { Component } from "react";
import "./style.css"
import Button from "../../Button/Button";
// import DashboardNewsCard from "../../DashboardNewsCard/DashboardNewsCard";
import Sidebar from "../../Sidebar/Sidebar";
import AssetsSearch from "../../ClientSearch/SearchFunctions/AssetsSearch";
import ExpensesSearch from "../../ClientSearch/SearchFunctions/ExpensesSearch";
import LiabilitiesSearch from "../../ClientSearch/SearchFunctions/LiabilitiesSearch";
import IncomeSearch from "../../ClientSearch/SearchFunctions/IncomeSearch";



class PlannerInfoPage extends Component {
    render() {
        return (
            <div className="container-fluid h-100 p-0 m-0">
                <Sidebar />
                <div className="content">
                    <Button text={"Show Assets and Liabilities"} />
                    <Button text={"Print Record of Advice"} />
                    <h1 className="text-center">Welcome to the Planner Tools!</h1>


                    <AssetsSearch />
                    <br></br>
                    <LiabilitiesSearch />
                    <IncomeSearch />
                    <ExpensesSearch />

                    {/* <DashboardNewsCard /> */}
                </div>
            </div>
        );
    }
}

export default PlannerInfoPage;