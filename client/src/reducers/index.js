import { combineReducers } from 'redux';
import loginReducer from './reducer-login';
import projectReducer from './reducer-project'
const allReducers =  combineReducers({
    loginUser: loginReducer,
    selectedProject: projectReducer

});

export default allReducers;