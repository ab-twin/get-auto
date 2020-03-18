import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/app";
import { GetautoServiceProvider } from "./components/getauto-service-context";
import { Provider } from "react-redux";
import GetautoService from "./services/getauto-service";
import store from "./store";
import ErrorBoundry from "./components/error-boundry";
import { BrowserRouter as Router } from "react-router-dom";



ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <GetautoServiceProvider value={GetautoService}>
                <Router>
                    <App />
                </Router>
            </GetautoServiceProvider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));