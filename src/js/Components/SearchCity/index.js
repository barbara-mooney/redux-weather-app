import { connect } from 'react-redux';
import SearchCity from './SearchCity';

function mapStoreToProps(store) {
    return {
        name: store.name,
        lat: store.lat,
        lon: store.lon,
        temp: store.temp,
        pressure: store.pressure,
        humidity: store.humidity,
        temp_min: store.temp_min,
        temp_max: store.temp_max,
        wind: store.wind
    };
}
export default connect(mapStoreToProps)(SearchCity);