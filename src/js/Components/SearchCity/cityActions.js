
export function updateCity(name) {
    return {
        type: 'UPDATE_CITY',
        payload: { name }
    };
}
export const searchCity = (name) => ({
    type: 'SEARCH_CITY', 
    payload: axios.get(`/search/${name}`),
});
// how do i console inside the function? it gives me an error. 
