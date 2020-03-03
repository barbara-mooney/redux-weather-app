
const defaultState = {
    name: '',
    lon:'0',
    lat: '0',
    icon: '0',
    temp: '0',
    pressure: '0',
    humidity: '0',
    temp_min: '0',
    temp_max: '0',
    wind: '0', 
    history: [],
};

export default function cityReducers (state = defaultState, action) {
    const { type, payload } = action;
    
    switch (type) {
        case 'UPDATE_CITY': {
            return {
                ...state, 
                name: payload.name, 
            };
        }
        case 'SEARCH_CITY_PENDING': {
            return {
                ...state
            }
        }
        case 'SEARCH_CITY_FULFILLED': {
            return {
                ...state,
                name: payload.data.name,
                lon: payload.data.coord.lon,
                lat: payload.data.coord.lat,
                icon: payload.data.weather[0].icon,
                temp: payload.data.main.temp,
                pressure: payload.data.main.pressure,
                humidity: payload.data.main.humidity,
                temp_min: payload.data.main.temp_min,
                temp_max: payload.data.main.temp_max,
                wind: payload.data.wind.speed,
                history: [...state.history, payload.data.name]
                }; 
            }            

        case 'SEARCH_CITY_REJECTED': {
            return {
                ...state,
                status: 'Rejected',
                error: payload.data, 
            }
        } default: {
            return state;
        }
    }   
}
