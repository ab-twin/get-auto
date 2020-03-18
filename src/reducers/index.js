const initialState = {
    clients: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CLIENTS_LOADED':
            return {
                clients: action.payload
            };
        default:
            return state;

    }
}

export default reducer;