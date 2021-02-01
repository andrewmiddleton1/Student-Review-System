import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/pages/Landing/Landing";
import Register from "./components/Register/register";
import Login from "./components/Login/login";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Other from "./components/pages/Other/Other";
import Profile from "./components/Profile/profile";
import ClientAssetsPage from "./components/pages/ClientAssetsPage/ClientAssetsPage";
import ClientIncomePage from "./components/pages/ClientIncomePage/ClientIncomePage";

import "./App.css";

import StartUp from './components/pages/StartUp/startUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from './Auth';
import ClientLiabilitiesPage from "./components/pages/ClientLiabilitiesPage/ClientLiabilitiesPage";
import ClientParticularsPage from "./components/pages/ClientParticularsPage/ClientParticularsPage";
import ClientExpensesPage from "./components/pages/ClientExpensesPage/ClientExpensesPage";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container-fluid pl-0 pr-0 m-0">
                    <Navbar />
                    <Route exact path="/" component={Landing} />
                    <div className='container-fluid m-0 p-0'>
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/dashboard" component={Auth(Dashboard)} />
                        <Route exact path="/other" component={Other} />
                        <Route exact path="/startUp" component={StartUp} />
                        <Route exact path="/clientassets" component={ClientAssetsPage} />
                        <Route exact path="/clientliabilities" component={ClientLiabilitiesPage} />
                        <Route exact path="/clientincome" component={ClientIncomePage} />
                        <Route exact path="/clientparticulars" component={ClientParticularsPage} />
                        <Route exact path="/clientexpenses" component={ClientExpensesPage} />
                    </div>
                </div>
            </Router>
        );
    }
}
export default App;
