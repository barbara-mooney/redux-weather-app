
export function updateCity(name) {
    return {
        type: 'UPDATE_CITY',
        payload: { name }
    };
}

// IF I USE THIS CODE, IT TELLS ME THAT "Actions must be plain objects. Use custom middleware for async actions.""
export const searchCity = () => ({
    type: 'SEARCH_CITY', 
    payload: axios.get(`/search/${name}`)
});

// IF I USE THIS CODE, IT TELLS ME THAT DISPATCH IS NOT DEFINED.
export const searchCity = (name) => {
    dispatch ({ 
        type: 'SEARCH_CITY', 
        payload: axios.get(`/search/${name}`)
    })
  }


// export const searchCity = () => (dispatch) => {
//     dispatch({ type: pending })
//     fetch(`/search/${this.payload.name}`)
//     .then(response => response.json())
//     .then(data => dispatch({ type: SUCCESS, payload: data }))
//     .then(error => dispatch({ type: FAILED, payload: error }))
//   }