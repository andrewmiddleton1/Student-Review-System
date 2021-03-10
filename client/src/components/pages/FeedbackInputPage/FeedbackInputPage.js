import React, { Component } from "react";
import Sidebar from "../../Sidebar/Sidebar"
import DashboardNewsCard from "../../DashboardNewsCard/DashboardNewsCard"
import "./style.css";
import InputFeedback from "../../InputFeedback/InputFeedback";

class FeedbackInputPage extends Component {
    render() {
        return (
            <div className="container-fluid h-100 p-0 m-0">
                <Sidebar />
                <div className="content">
                    <InputFeedback history={this.props.history} />

                </div>
            </div>
        );
    }
}

export default FeedbackInputPage;