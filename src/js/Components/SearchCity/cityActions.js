import axios from 'axios';

export function updateCity(name) {
    return {
        type: 'UPDATE_CITY',
        payload: { name }
    };
}
export function searchCity (name) {
    return {
        type: 'SEARCH_CITY', 
        payload: axios.get(`/search/${name}`)}
};