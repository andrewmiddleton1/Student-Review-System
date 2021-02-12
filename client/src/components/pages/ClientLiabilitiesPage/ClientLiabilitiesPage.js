import React, { Component } from "react";
import Sidebar from "../../Sidebar/Sidebar"
import DashboardNewsCard from "../../DashboardNewsCard/DashboardNewsCard"
import "./style.css";
import InputClientLiabilities from "../../InputClientLiabilities/InputClientLiabilities";

class ClientLiabilitiesPage extends Component {
    render() {
        return (
            <div className="container-fluid h-100 p-0 m-0">
                <Sidebar />
                <div className="content">
                    <InputClientLiabilities history={this.props.history} />

                </div>
            </div>
        );
    }
}

export default ClientLiabilitiesPage;