import { combineReducers } from 'redux';
import cityReducers from './Components/SearchCity/cityReducers';


const rootReducer = combineReducers({
    cityReducers,
});

export default rootReducer;
