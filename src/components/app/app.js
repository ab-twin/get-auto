import React, { Component } from "react";
import { LoginPage, ErrorPage, NeworderPage, OrderlistPage } from "../pages";
import { Switch, Route } from "react-router-dom";
import Header from "../header";

const App = () => {
    return (
        <div>
            <Header />
            <div className="content">
                <Switch>
                    <Route
                        path="/"
                        exact
                        component={ErrorPage}>

                    </Route>
                    <Route
                        path="/neworder"
                        component={NeworderPage}>

                    </Route>
                    <Route
                        path="/orderlist"
                        component={OrderlistPage}>

                    </Route>
                    <Route
                        component={ErrorPage}>

                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default App;