/** данные по организациям */
const setCompanies = (data) => {
    return {
        type: 'FETCH_COMPANIES_SUCCESS',
        payload: data
    }
} //после того как компании пришли, загружаем их в state
const getCompanies = () => {
    return {
        type: 'FETCH_COMPANIES_REQUEST'
    }
} //подгружаем список компаний
const errorCompanies = (error) => {
    return {
        type: 'FETCH_COMPANIES_FAILURE',
        payload: error
    }
} //если во время загрузки произошла ошибка
const fetchCompanies = (getautoService) => () => (dispatch) => {
    dispatch(getCompanies());
    getautoService.getCompanies()
        .then((data) => dispatch(setCompanies(data)))
        .catch((error) => dispatch(errorCompanies(error)));
} //функция подгрузки компаний с сервера

/** данные по текущему заказу */
const selectedCompany = (id) => {
    return {
        type: 'COMPANY_SELECTED',
        payload: id
    }
}
const changeOrderInfo = (obj) => {
    return {
        type: 'UPDATE_ORDER_INFO',
        payload: obj
    }
}

/** данные по заказам */
const setOrderList = (data) => {
    return {
        type: 'FETCH_ORDERS_SUCCESS',
        payload: data
    }
} //после того как заказы пришли, загружаем их в state
const getOrderList = () => {
    return {
        type: 'FETCH_ORDERS_REQUEST'
    }
} //подгружаем список заказов
const errorOrderList = (error) => {
    return {
        type: 'FETCH_ORDERS_FAILURE',
        payload: error
    }
} //если во время загрузки произошла ошибка
const fetchOrderList = (getautoService) => () => (dispatch) => {
    dispatch(getOrderList());
    getautoService.getOrders()
        .then((data) => dispatch(setOrderList(data)))
        .catch((error) => dispatch(errorOrderList(error)));
} //функция подгрузки заказов с сервера

/** работа с авторизацией */
const logout = () => {
    return {
        type: 'USER_LOGOUT'
    }
} //выход из авторизции
const login = () => {
    return {
        type: 'USER_LOGIN'
    }
} //авторизация


export {
    fetchCompanies,
    selectedCompany,
    changeOrderInfo,
    fetchOrderList,
    logout,
    login
}