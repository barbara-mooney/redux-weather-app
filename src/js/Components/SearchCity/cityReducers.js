const defaultState = {
    cityData: '',
    name: '',
    lon:'',
    lat: '',
    temp: '',
    pressure: '',
    humidity: '',
    temp_min: '',
    temp_max: '',
    wind: '', 
};

export default function cityReducers (state = defaultState, action) {
    const { type, payload } = action;

    console.log(payload, 'payload inside reducer function')
    
    switch (type) {
        case 'UPDATE_CITY': {
            console.log(payload, 'inside update city reducer')
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
                cityData: payload.data,
                name: payload.data.name,
                lon: payload.data.coord.lon,
                lat: payload.data.coord.lat,
                temp: payload.data.main.temp,
                pressure: payload.data.main.pressure,
                humidity: payload.data.main.humidity,
                temp_min: payload.data.main.temp_min,
                temp_max: payload.data.main.temp_max,
                windspeed: payload.data.main.wind,
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
