import React from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import AuthUserContext from "./context";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

const withAutohorization = condition => Component => {
  class withAuthorization extends React.Component {
    //AUTHORIZATION LOGIC WITH FIREBASE LISTENER,
    //TRIGGERS A CALLBACK FUNCTION ("condition()") EVERY TIME THE AUTHENTICATED USER CHANGES
    // condition() is executed with the authUser

    componentDidMount() {
      this.listener = this.props.firebase.onAuthUserListener(
        authUser => {
          //  If the user is null, it redirects.
          if (!condition(authUser)) {
            this.props.history.push(ROUTES.LANDING);
          }
        },
        () => this.props.history.push(ROUTES.LANDING)
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        // AuthUserContext shows the Passed Component (page) after the redirection happens
        <AuthUserContext.Consumer>
          {authUser =>
            // ----> Passed Component (page) that should be protected
            condition(authUser) ? <Component {...this.props} /> : null
          }
        </AuthUserContext.Consumer>
      );
    }
  }
  return compose(
    withRouter,
    withFirebase
  )(withAuthorization); //como higher order function en vanilla JS
};

export default withAutohorization;
