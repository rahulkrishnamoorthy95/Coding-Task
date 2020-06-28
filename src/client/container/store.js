import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// created redux store to maintain state.
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );

  export default store;