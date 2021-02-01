import React, { Component } from "react";
import Sidebar from "../../Sidebar/Sidebar"
import DasboardNewsCard from "../../DasboardNewsCard/DasboardNewsCard"
import "./style.css";
import InputClientIncome from "../../InputClientIncome/InputClientIncome";

class ClientIncomePage extends Component {
    render() {
        return (
            <div className="container-fluid h-100 p-0 m-0">
                <Sidebar />
                <div className="content">
                    <InputClientIncome />
                    <DasboardNewsCard />
                </div>
            </div>
        );
    }
}

export default ClientIncomePage;