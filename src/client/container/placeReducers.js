import {
    FETCH_PLACES_BEGIN,
    FETCH_PLACES_SUCCESS,
    FETCH_PLACE_SUCCESS,
    FETCH_PLACES_FAILURE,
    ADD_FAVOURITES
  } from "./placeAction";
  
  const initialState = {
    items: [],
    loading: false,
    error: null,
    item: null,
    favourites: []
  };
  
  export default function productReducer(
    state = initialState,
    action
  ) {
    switch (action.type) {
      case FETCH_PLACES_BEGIN:
        // Mark the state as "loading" so we can show a spinner
        // Since starting fresh resetting error.
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_PLACES_SUCCESS:
        // Fetch places done: set loading "false".
        // Also, replace the items with the ones from the API
        return {
          ...state,
          loading: false,
          items: action.payload.places
        };

      case FETCH_PLACE_SUCCESS:
        // fetch selected item done: set loading "false".
        // Also, replace the item with the ones from the API
        return {
          ...state,
          loading: false,
          item: action.payload.place[0]
        };

      case ADD_FAVOURITES:
        // ADD Favourite done: set loading "false".
        // 1 - If already an item is added to favourite, If so return the initial state.
        // 2- Else return the updated state with the favourite item
        if (state.favourites.some(item => item.id === action.payload.place.id)) {
            return state;
        }
        else {
            return {
              ...state,
              loading: false,
              favourites: state.favourites.concat(action.payload.place)
            }
        }

      case FETCH_PLACES_FAILURE:
        // The request failed, but it did stop, so set loading to "false".
        // Save the error, and we can display it to user
        // Since it failed, we don't have items to display anymore, so set it empty.
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          items: []
        };
  
      default:
        // ALWAYS have a default case in a reducer.
        return state;
    }
  }
  