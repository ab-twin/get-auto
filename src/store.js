import reducer from "./reducers";
import { createStore, applyMiddleware } from "redux";

const logMiddleware = (store) => (dispatch) => (action) => {
    console.log('Log from middleware', action, store.getState());
    return dispatch(action);
}

const functionMiddleware = ({getState}) => (dispatch) => (action) => {
    if (typeof action === 'function') {
        return action(dispatch, getState);
    }

    return dispatch(action);
}

const store = createStore(reducer,
    applyMiddleware(functionMiddleware, logMiddleware));

export default store;