import React, { Component } from "react";
import "./style.css"

// import DashboardNewsCard from "../../DashboardNewsCard/DashboardNewsCard";
import Sidebar from "../../Sidebar/Sidebar";


import CreateROA from "../../CreateROA/CreateROA";
import Docxtemplater from "docxtemplater";



class CreateROAPage extends Component {
    render() {
        return (
            <div className="container-fluid h-100 p-0 m-0">
                <Sidebar />
                <div className="content">

                    <h1 className="text-center">Create a Record of Advice (and other documents!)
                    <br></br>
                        {<i className="fas fa-folder-minus" />}</h1>
                    <CreateROA />
                    <br></br>
                    {/* <Docxtemplater /> */}
                </div>
            </div>
        );
    }
}

export default CreateROAPage;