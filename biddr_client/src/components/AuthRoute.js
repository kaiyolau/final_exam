import React from "react";
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ isAllowed, component: Component }) => {
        if (isAllowed) {
            return <Route component={Component} />;
        } else {
            return <Redirect to="/sign_in" />
        }
}

export default AuthRoute;
