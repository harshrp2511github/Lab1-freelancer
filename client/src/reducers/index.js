import { combineReducers } from 'redux';
import loginReducer from './reducer-login';
const allReducers =  combineReducers({
    loginUser: loginReducer

});

export default allReducers;