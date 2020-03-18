import React from "react";
import './error-indicator.css';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <h4>Упс :(</h4>
            <p>Что-то пошло не так...<br />
            Не беспокойтесь, наша команда уже ищет ошибку</p>
        </div>
    )
}

export default ErrorIndicator;