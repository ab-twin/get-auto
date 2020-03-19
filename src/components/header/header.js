import React from "react";
import {Link, } from "react-router-dom";
import {logout} from "../../actions";
import { connect } from "react-redux";

const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link to="/" className="navbar-brand">get-auto.ru</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                    aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/neworder" className="nav-link">Новый заказ</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/orderlist" className="nav-link">Список заказов</Link>
                    </li>
                    <li className="nav-item">
                        <a
                            href=""
                            onClick={(e) => {
                                e.preventDefault();
                                props.logout() }}
                            className="nav-link">Выйти</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(Header);