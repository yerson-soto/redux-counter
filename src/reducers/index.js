import { combineReducers } from 'redux';
import loggedReducer from './isLogged';
import counterReducer from './counter';

const rootReducer = combineReducers({
    isLogged: loggedReducer,
    counter: counterReducer
});

export default rootReducer;