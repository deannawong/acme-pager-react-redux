import { createStore } from "redux";

const reducer = (state = { employees: [], page: 0 }, action) => {
  switch (action.type) {
    case "GET_EMPLOYEES":
      return { ...state, employees: action.employees };
    case "UPDATE_PAGE":
      return { ...state, page: action.page };
    case "DELETE_CONTACT":
      return { ...state, employees: action.employees };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
