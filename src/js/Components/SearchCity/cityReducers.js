const defaultState = {
    name: 'buenosaires',
    lon:'12',
    lat: '12',
    temp: '12',
    pressure: '12',
    humidity: '12',
    temp_min: '12',
    temp_max: '12',
    wind: '12', 
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
                lon = payload.coord.lon,
                lat = payload.coord.lat,
                temp = payload.main.temp,
                pressure = payload.main.pressure,
                humidity = payload.main.humidity,
                temp_min = payload.main.temp_min,
                temp_max = payload.main.temp_max,
                wind = payload.main.wind
            return {
                ...state
                }; 
            }
        case 'SEARCH_CITY_REJECTED': {
            return {
                ...state,
                status: 'Rejected',
                error: payload.data
            }
        } default: {
            return state;
        }
    }   
}
