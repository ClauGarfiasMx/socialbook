import React from "react";
import { Link } from "react-router-dom";

import { AuthUserContext } from "../Session";
import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
import * as ROLES from "../../constants/roles";

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? <NavigationAuth authUser={authUser} /> : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
  <ul>
    {/* <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li> */}
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Mi Cuenta</Link>
    </li>
    {!!authUser.roles[ROLES.ADMIN] && (
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
    )}
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Bienvenidx</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Iniciar Sesión</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_UP}>Crear Cuenta</Link>
    </li>
  </ul>
);

export default Navigation;