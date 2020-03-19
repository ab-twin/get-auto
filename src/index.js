import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/app";
import { GetautoServiceProvider } from "./components/getauto-service-context";
import { Provider, Consumer } from "react-redux";
import GetautoService from "./services/getauto-service";
import store from "./store";
import ErrorBoundry from "./components/error-boundry";
import { BrowserRouter as Router } from "react-router-dom";
import {LoginPage} from "./components/pages";
import { connect } from "react-redux";

const getautoService = new GetautoService();
const user = (store.getState()).user;


const Content = ({user}) => (user !== undefined) ? <App /> : <LoginPage />;
const ContentWithState = connect(({ user }) => ({user: user}))(Content);


ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <GetautoServiceProvider value={getautoService}>
                <Router>
                    <ContentWithState />
                </Router>
            </GetautoServiceProvider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));