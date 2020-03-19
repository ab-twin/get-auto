import React from "react";
import Spinner from "../spinner";
import ErrorButton from "../error-button";
import {login} from "../../actions";
import {connect} from "react-redux";

const LoginPage = (props) => {
    return (
        <div>
            <div className="modal" style={{display: 'block'}} id="exampleModalCenter">
                <div className="modal-dialog modal-sm modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form className="h-100">
                                <fieldset>
                                    <div className="form-group">
                                        <input
                                            // onChange={(e) => changeOrderInfo({prop: 'name', val: e.target.value})}
                                            type="text"
                                            // value={name}
                                            className="form-control"
                                            id="name"
                                            placeholder="Введите ФИО"
                                            autoComplete="off"/>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            // onChange={(e) => changeOrderInfo({prop: 'phone', val: e.target.value})}
                                            type="text"
                                            // value={phone}
                                            className="form-control"
                                            id="phone"
                                            placeholder="Введите Телефон"
                                            autoComplete="off"/>
                                    </div>
                                    <button onClick={props.login} type="submit" className="btn btn-primary w-100">Авторизоваться</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => dispatch(login())
    }
}

export default connect(null, mapDispatchToProps)(LoginPage);