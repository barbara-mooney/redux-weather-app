import { connect } from 'react-redux';
import SearchCity from './SearchCity';

function mapStoreToProps(store) {
    console.log(store, 'inside mapstoretoprops')
    return {
        name: store.cityReducers.name,
        lat: store.cityReducers.lat,
        lon: store.cityReducers.lon,
        temp: store.cityReducers.temp,
        pressure: store.cityReducers.pressure,
        humidity: store.cityReducers.humidity,
        temp_min: store.cityReducers.temp_min,
        temp_max: store.cityReducers.temp_max,
        wind: store.cityReducers.wind
    };
}
export default connect(mapStoreToProps)(SearchCity);