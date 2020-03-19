import React, { Component } from "react";
import {YMaps, Map, SearchControl, Placemark, Rectangle} from 'react-yandex-maps';
import { withGetautoService } from "../hoc";
import { connect } from "react-redux";
import { fetchCompanies, selectedCompany, changeOrderInfo } from "../../actions";
import { bindActionCreators } from "redux";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

class NeworderPage extends Component {


    componentDidMount() {
        this.props.fetchCompanies();
    }

    render() {
        const {
            companyList: { companies, loading, error },
            orderInfo: { name, phone, company, comment },
            selectedCompany, changeOrderInfo } = this.props;

        const textOfSelected = company ? `${company.company} (${company.name})` : '____';
        let classOfSelected = company ? 'alert alert-dismissible alert-success' : 'alert alert-dismissible alert-light';

        let onSelected = (
            <React.Fragment>
                <span>Сервис для заявки:</span>
                <br /><b>{textOfSelected}</b>
            </React.Fragment>
        );

        if (loading) {
            classOfSelected = 'alert alert-dismissible alert-light';
            onSelected = (
                <Spinner />
            );
        }

        if (error) {
            classOfSelected = 'alert alert-dismissible alert-danger';
            onSelected = (
                <ErrorIndicator />
            );
        }


        return (
            <div className="row row-flex">
                <div className="col-3">
                    <form className="h-100">
                        <div className={classOfSelected}>
                            {onSelected}
                        </div>
                        <br />
                        <fieldset>
                            <div className="form-group">
                                <label htmlFor="name">Данные клиента</label>
                                <input
                                    onChange={(e) => changeOrderInfo({prop: 'name', val: e.target.value})}
                                    type="text"
                                    value={name}
                                    className="form-control"
                                    id="name"
                                    placeholder="Введите ФИО"
                                    autoComplete="off"/>
                            </div>
                            <div className="form-group">
                                <input
                                    onChange={(e) => changeOrderInfo({prop: 'phone', val: e.target.value})}
                                    type="text"
                                    value={phone}
                                    className="form-control"
                                    id="phone"
                                    placeholder="Введите Телефон"
                                    autoComplete="off"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="mark">Данные автомобиля</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="mark"
                                    placeholder="Введите марку автомобиля"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="model"
                                       placeholder="Введите модель автомобиля"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="year" placeholder="Введите год"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="date">Дата и время записи</label>
                                <select className="form-control" id="date">
                                    <option>01.04.2020</option>
                                    <option>02.04.2020</option>
                                    <option>03.04.2020</option>
                                    <option>04.04.2020</option>
                                    <option>05.04.2020</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <select multiple="" className="form-control" id="time">
                                    <option>10:00</option>
                                    <option>11:00</option>
                                    <option>12:00</option>
                                    <option>13:00</option>
                                    <option>14:00</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="comment">Комментарий к заказу</label>
                                <textarea
                                    onChange={(e) => changeOrderInfo({prop: 'comment', val: e.target.value})}
                                    value={comment}
                                    className="form-control"
                                    id="comment"
                                    rows="3" />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Отправить заявку</button>
                        </fieldset>
                    </form>
                </div>
                <div className="col-9">
                    <YMaps query={{ lang: 'ru_RU', apikey: '59690a9f-d7de-455d-a94a-c4065d8458f3' }}>
                        <Map
                            className="yandex-map h-100"
                            defaultState={{ center: [55.75, 37.57], zoom: 10 }} >
                            <SearchControl />
                            {companies.map((placemarkParams, i) =>
                                <Placemark key={i}
                                           onClick={() => selectedCompany(placemarkParams.id)}
                                           geometry={{
                                               type: 'Point',
                                               coordinates: placemarkParams.coord,
                                           }}
                                           properties={{
                                               // The placemark content.
                                               iconContent: placemarkParams.company,
                                               hintContent: placemarkParams.name,
                                           }}
                                           options={{
                                               preset: 'islands#blackStretchyIcon',
                                           }} />
                            )}
                        </Map>
                    </YMaps>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ companyList, orderInfo }) => {
    return {companyList, orderInfo}
}

const mapDispatchToProps = (dispatch, { getautoService }) => {
    return bindActionCreators({
        fetchCompanies: () => fetchCompanies(getautoService)(),
        selectedCompany: selectedCompany,
        changeOrderInfo: changeOrderInfo
    }, dispatch);
}

export default withGetautoService()(
    connect(mapStateToProps, mapDispatchToProps)(NeworderPage));