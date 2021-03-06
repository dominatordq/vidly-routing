import React from 'react';
import auth from "../../services/authService";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
    return ( 
        <Route
              {...rest}
              render={props => {
                if (!auth.getCurrentUser()) return <Redirect to={{ // cannot access unless user is logged in
                    pathname: '/login',
                    state: { from: props.location } // keep reference of location before being redirected to login
                }} /> 
                return Component ? <Component {...props} /> : render(props); // either return a Component or render the props
              }}>
        </Route>
     );
}
 
export default ProtectedRoute;