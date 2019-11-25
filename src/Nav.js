import React from "react";
import { Link } from "react-router-dom";
import connect from "./connect.js";
import store from "./store.js";

const Nav = connect(({ employees, location: { hash } }) => {
  const pages = [0, 1, 2, 3, 4, 5, 6];
  return (
    <nav>
      <Link
        to={store.getState().page === 0 ? "/0" : `${store.getState().page - 1}`}
      >
        Prev
      </Link>
      {pages.map(pg => (
        <Link
          key={pg}
          to={`/${pg}`}
          className={store.getState().page === pg ? "selected" : ""}
        >{`${pg + 1}`}</Link>
      ))}
      <Link
        to={store.getState().page === 6 ? "/6" : `${store.getState().page + 1}`}
      >
        Next
      </Link>
    </nav>
  );
});

export default Nav;
