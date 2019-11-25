import axios from "axios";

import store from "./store.js";

const fetchContacts = reqPage => {
  axios
    .get(`/api/employees/${reqPage}`)
    .then(response => response.data)
    .then(data =>
      store.dispatch({ type: "GET_EMPLOYEES", employees: data.rows })
    );
};

const updatePage = newPage =>
  store.dispatch({ type: "UPDATE_PAGE", page: newPage });

export { fetchContacts, updatePage };
