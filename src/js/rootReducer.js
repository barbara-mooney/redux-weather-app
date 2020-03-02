import { combineReducers } from 'redux';
import cityReducers from './components/SearchCity/cityReducers';


const rootReducer = combineReducers({
    cityReducers,    
});

export default rootReducer;
