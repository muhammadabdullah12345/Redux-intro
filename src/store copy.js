import { applyMiddleware, combineReducers, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./features/accounts/accountSlice";
import reducerCustomer from "./features/customers/customerSlice";
import { thunk } from "redux-thunk";
const seeReducer = combineReducers({
  account: reducer,
  customer: reducerCustomer,
});
const store = createStore(seeReducer, applyMiddleware(thunk));
export default store;
