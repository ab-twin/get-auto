import React, { Component } from "react";
import { LoginPage, ErrorPage } from "../pages";
import { Switch, Route } from "react-router-dom";

const App = () => {
    return (
        <Switch>
            <Route
                path="/"
                exact
                component={LoginPage}>

            </Route>
            <Route
                component={ErrorPage}>

            </Route>
        </Switch>
    );
}

export default App;