import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {fetchOrderList} from "../../actions";
import {withGetautoService} from "../hoc";
import {connect} from "react-redux";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";


class OrderlistPage extends Component {

    renderRow = (item) => {
        let status = '';
        switch (item.status.id) {
            case 1:
                status = <button type="button" className="btn btn-secondary btn-sm">{item.status.title}</button>;
                break;
            case 2:
                status = <button type="button" className="btn btn-success btn-sm">{item.status.title}</button>;
                break;
            case 3:
                status = <button type="button" className="btn btn-danger btn-sm">{item.status.title}</button>;
                break;

        }
        return (
            <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.company}</td>
                <td>{item.date}</td>
                <td>{item.car}</td>
                <td>{status}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>
                </td>
            </tr>

        );
    }

    componentDidMount() {
        this.props.fetchOrderList();
    }

    render() {

        const { orderList: { orders, loading, error } } = this.props;

        const loadingInfo = loading ? <Spinner /> : null;
        const errorInfo = error ? <ErrorIndicator /> : null;


        return (
            <div>
                <table className="table table-hover table-striped">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Сервис</th>
                        <th scope="col">Дата / Время</th>
                        <th scope="col">Автомобиль</th>
                        <th scope="col">Статус</th>
                        <th scope="col">Имя</th>
                        <th scope="col">Телефон</th>
                        <th scope="col">Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    {orders.map(this.renderRow)}
                    </tbody>
                </table>
                {loadingInfo}
                {errorInfo}
            </div>
        );
    }
}

const mapStateToProps = ({ orderList }) => {
    return {orderList}
}

const mapDispatchToProps = (dispatch, { getautoService }) => {
    return bindActionCreators({
        fetchOrderList: () => fetchOrderList(getautoService)()
    }, dispatch);
}

export default withGetautoService()(
    connect(mapStateToProps, mapDispatchToProps)(OrderlistPage));