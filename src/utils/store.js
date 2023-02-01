import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
const initialState = {
    list: [],
    show: true,
    value: ""
};
function reducer(state = initialState, action) {
    switch (action.type) {
        case 'switchShow':
            return {
                ...state,
                show: action.flag,
            };
        case 'getList':
            return {
                ...state,
                list: action.list,
            };
        case 'setValue':
            return {
                ...state,
                value: action.value,
            };
        default:
            return state;
    }
}
const store = createStore(reducer, applyMiddleware(thunk))
export default store;
