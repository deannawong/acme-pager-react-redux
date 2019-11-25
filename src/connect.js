import React from "react";
import store from "./store.js";
import { fetchContacts, updatePage } from "./storeUpdates.js";

const connect = Component => {
  class Connected extends React.Component {
    constructor() {
      super();
      this.state = store.getState();
    }
    componentWillUnmount() {
      this.unsubscribe();
    }

    componentDidUpdate() {
      const pageNeeded = parseInt(location.hash[2]);
      if (pageNeeded !== this.state.page) {
        fetchContacts(pageNeeded);
        updatePage(pageNeeded);
      }
    }

    componentDidMount() {
      const pageNeeded = parseInt(location.hash[2]);
      pageNeeded ? fetchContacts(pageNeeded) : fetchContacts(0);
      this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
    }
    render() {
      return <Component {...this.state} {...this.props} />;
    }
  }
  return Connected;
};

export default connect;
