import { connect } from 'react-redux';
import InfoDisplay from './InfoDisplay';

function mapStoreToProps(store) {
    return {
        name: store.cityReducers.name,
        lat: store.cityReducers.lat,
        lon: store.cityReducers.lon,
        icon: store.cityReducers.icon,
        temp: store.cityReducers.temp,
        pressure: store.cityReducers.pressure,
        humidity: store.cityReducers.humidity,
        temp_min: store.cityReducers.temp_min,
        temp_max: store.cityReducers.temp_max,
        wind: store.cityReducers.wind
    };
}
export default connect(mapStoreToProps)(InfoDisplay);