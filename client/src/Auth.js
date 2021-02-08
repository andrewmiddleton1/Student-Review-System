import React from 'react';
import { Redirect } from "react-router-dom";
import { useAppContext } from './store';

function Auth(ComposedComponent, roles = ["user", "planner"]) {
    const [state] = useAppContext();

    return function Authentication(props) {

        return state.isAuthenticated && roles.includes(state.user.role)
            ? <ComposedComponent {...props} />
            : <h1>You are not authorised to enter the Planner Portal</h1>;
    };
}

export default Auth;
