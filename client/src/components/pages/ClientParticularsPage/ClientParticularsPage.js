import React, { Component } from "react";
import Sidebar from "../../Sidebar/Sidebar"
import DasboardNewsCard from "../../DasboardNewsCard/DasboardNewsCard"
import "./style.css";
import InputClientParticulars from "../../InputClientParticulars/InputClientParticulars";

class ClientParticularsPage extends Component {
    render() {
        return (
            <div className="container-fluid h-100 p-0 m-0">
                <Sidebar />
                <div className="content">
                    <InputClientParticulars />
                    <DasboardNewsCard />
                </div>
            </div>
        );
    }
}

export default ClientParticularsPage;