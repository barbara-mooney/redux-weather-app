import axios from 'axios';

export function updateCity(name) {
    console.log(name, 'inside action updateCity')
    return {
        type: 'UPDATE_CITY',
        payload: { name }
    };
}
export function searchCity (name) {
    console.log(name, '2nd console')
    return {
        type: 'SEARCH_CITY', 
        payload: axios.get(`/search/${ name }`),
    }
};