import axios from "axios";

function getPlaces() {
    return axios.get("http://localhost:8080/places") // Invoke API with UI server host(8080).
      .then(handleErrors)
      .then(res => res.data);
}

function getDetailPlace(id) {
  return axios.get(`http://localhost:8080/place/${id}`) // Invoke API with UI server host(8080).
    .then(handleErrors)
    .then(res => res.data);
}
  
// callback action 
export function fetchPlacess() { 
  return dispatch => {
    dispatch(fetchPlacesBegin());
    return getPlaces()
      .then(json => {
        dispatch(fetchPlacesSuccess(json.places));
        return json.places;
      })
      .catch(error =>
        dispatch(fetchPlacesFailure(error))
      );
  };
}

export function fetchDetailPlace({ id }) {
  return dispatch => {
    dispatch(fetchPlacesBegin());
    return getDetailPlace(id)
      .then(json => {
        dispatch(fetchPlaceSuccess(json));
        return json;
      })
      .catch(error =>
        dispatch(fetchPlacesFailure(error))
      );
  };
}

  export function addFavourites(place) {
    return favourites(place)
  }
  
  // Handle HTTP errors since axios won't.
  function handleErrors(response) {
    console.log('response is =>', response);
    if (response.data.isAxiosError) {
        throw Error('API call failed');
    }
    return response;
  }
  
  export const FETCH_PLACES_BEGIN = "FETCH_PLACES_BEGIN";
  export const FETCH_PLACES_SUCCESS = "FETCH_PLACES_SUCCESS";
  export const FETCH_PLACE_SUCCESS = "FETCH_PLACE_SUCCESS";
  export const FETCH_PLACES_FAILURE = "FETCH_PLACES_FAILURE";
  export const ADD_FAVOURITES = "ADD_FAVOURITES";
  
  export const fetchPlacesBegin = () => ({
    type: FETCH_PLACES_BEGIN
  });
  
  export const fetchPlacesSuccess = places => ({
    type: FETCH_PLACES_SUCCESS,
    payload: { places }
  });

  export const fetchPlaceSuccess = place => ({
    type: FETCH_PLACE_SUCCESS,
    payload: { place }
  });

  export const favourites = place => ({
    type: ADD_FAVOURITES,
    payload: { place }
  });
  
  export const fetchPlacesFailure = error => ({
    type: FETCH_PLACES_FAILURE,
    payload: { error }
  });
  