import React, {Component} from "react";
import ErrorIndicator from "../error-indicator";


export default class ErrorBoundry extends Component {

    state = {
        hasError: false
    }

    componentDidCatch(error, errorInfo) {
        console.log('errrooooorr', error);
        this.setState({
            hasError: true
        });
    }

    render() {
        const { hasError } = this.state;
        console.log(hasError);
        const content = hasError ? <ErrorIndicator /> : this.props.children;

        return content;
    }
}