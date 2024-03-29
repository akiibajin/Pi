import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "../reducer/reducer.jsx";
import thunk from "redux-thunk";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store; 