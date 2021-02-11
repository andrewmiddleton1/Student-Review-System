import React from 'react';
import { Redirect } from "react-router-dom";
import { useAppContext } from './store';
import { useLoginCheck } from './utils/setAuthToken';

function Auth(ComposedComponent, roles = ["user", "planner"]) {


    return function Authentication(props) {
        const [state, appDispatch] = useAppContext();
        useLoginCheck(appDispatch);
        console.log("user is", state.user.role);
        console.log("auth is", state.isAuthenticated);
        console.log('roles', roles)
        return state.isAuthenticated && roles.includes(state.user.role)
            ? <ComposedComponent {...props} state={state} dispatch={appDispatch} />
            : <h1>You are not authorised to enter the Planner Portal</h1>;
    };
}

export default Auth;
