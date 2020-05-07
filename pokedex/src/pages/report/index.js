import React, { Component } from "react";

import NavBar from '../../components/layout/NavBar';
import Dashboard from '../../components/layout/Dashboard';

import "./styles.css";

class Report extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <div className="container">
                    <Dashboard />
                </div>
            </React.Fragment>
        )
    }
}

export default Report;