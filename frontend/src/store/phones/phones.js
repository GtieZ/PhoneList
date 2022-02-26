import { combineReducers } from "redux";

const ADD_PHONE = 'ADD_PHONE';


export function addPhone(phone) {
    return {
        type: ADD_PHONE,
        phone: phone
    }
}



function phones(state = [], action) {
    if (action.type == ADD_PHONE) {
        return [...state, action.phone];
    }
    return state;
}



const phoneApp = combineReducers({ phones });

export default phoneApp;