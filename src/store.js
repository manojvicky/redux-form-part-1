import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as reduxFormReducer } from "redux-form";

const reducer = combineReducers({
  form: reduxFormReducer
});
console.log("reduxFormReducer", reduxFormReducer);
const customLogger = function(store) {
  return function(next) {
    return function(action) {
      console.group(action.type);
      console.log("%c prev store:", "color: green", store.getState());
      console.log("%c Action:", "color: orange", action);
      next(action);
      console.log("%c next store:", "color: green", store.getState());
      console.groupEnd();
      console.log("\n");
    };
  };
};

let store = createStore(reducer, applyMiddleware(customLogger));

export default store;
