import React from "react";
import { Switch, Route } from "react-router-dom";
import { compose } from "recompose";

import { withAuthorization, withEmailVerification } from "../Session";
import { UserList } from "../Users";
import * as ROLES from "../../constants/roles";
import * as ROUTES from "../../constants/routes";

const AdminPage = () => (
  <div>
    <h1>Admin</h1>
    <p>
      Esta página es visible a todos los usuarios logueados como
      administradores.
    </p>

    <Switch>
      {/* <Route exact path={ROUTES.ADMIN_DETAILS} component={UserItem} /> */}
      <Route exact path={ROUTES.ADMIN} component={UserList} />
    </Switch>
  </div>
);

const condition = authUser => authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(
  withEmailVerification,
  withAuthorization(condition)
)(AdminPage);
