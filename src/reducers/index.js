const updateCompanyList = (state, action) => {
    if (typeof state === 'undefined') {
        return {
            companies: [],
            loading: false,
            error: null
        }
    }

    switch (action.type) {
        case 'FETCH_COMPANIES_REQUEST':
            return {
                companies: [],
                loading: true,
                error: null
            }
        case 'FETCH_COMPANIES_SUCCESS':
            return {
                companies: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_COMPANIES_FAILURE':
            return {
                companies: [],
                lading: false,
                error: action.payload
            }
        default:
            return state.companyList;
    }
}

const validate = (obj) => {
    switch (obj.prop) {
        case 'phone':
            obj.val = obj.val.replace(/[^0-9,\),(\, ,\+, \-]/g, '');
    }

    return obj;
}

const updateOrderInfo = (state, action) => {
    if (typeof state === 'undefined') {
        return {
            name: '',
            phone: '',
            comment: '',
            company: null
        }
    }

    switch (action.type) {
        case 'COMPANY_SELECTED':
            const idCompany = action.payload
            const selected = state.companyList.companies.find(({id}) => id === idCompany);
            return {
                ...state.orderInfo,
                company: selected
            }
        case 'UPDATE_ORDER_INFO':
            const {prop, val} = validate(action.payload);
            return {
                ...state.orderInfo,
                [prop]: val
            };
        default:
            return state.orderInfo;
    }
}


const updateOrderList = (state, action) => {
    if (typeof state === 'undefined') {
        return {
            orders: [],
            loading: false,
            error: null
        }
    }

    switch (action.type) {
        case 'FETCH_ORDERS_REQUEST':
            return {
                orders: [],
                loading: true,
                error: null
            }
        case 'FETCH_ORDERS_SUCCESS':
            return {
                orders: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_ORDERS_FAILURE':
            return {
                orders: [],
                lading: false,
                error: action.payload
            }
        default:
            return state.orderList;
    }
}


const updateUser = (state, action) => {
    switch (action.type) {
        case 'USER_LOGOUT':
            localStorage.removeItem('user');
            break;
        case 'USER_LOGIN':
            localStorage.setItem('user', 'true');
            break;
    }

    // localStorage.setItem('user', 'true');
    const user = localStorage.user;
    return user;
}

const reducer = (state, action) => {

    return {
        companyList: updateCompanyList(state, action),
        orderInfo: updateOrderInfo(state, action),
        orderList: updateOrderList(state, action),
        user: updateUser(state, action)
    };
}

export default reducer;