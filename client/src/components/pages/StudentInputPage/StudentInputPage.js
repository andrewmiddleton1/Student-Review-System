import React, { Component } from "react";
import Sidebar from "../../Sidebar/Sidebar"
import DashboardNewsCard from "../../DashboardNewsCard/DashboardNewsCard"
import "./style.css";
import InputStudent from "../../InputStudent/InputStudent";

class StudentInputPage extends Component {
    render() {
        return (
            <div className="container-fluid h-100 p-0 m-0">
                <Sidebar />
                <div className="content">
                    <InputStudent history={this.props.history} />

                </div>
            </div>
        );
    }
}

export default StudentInputPage;