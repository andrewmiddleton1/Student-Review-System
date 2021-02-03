import React from 'react';
import { Redirect } from "react-router-dom";
import { useAppContext } from './store';

function Auth(ComposedComponent) {
    const [state] = useAppContext();

    return function Authentication(props) {
        return state.isAuthenticated
            ? <ComposedComponent {...props} />
            : <Redirect to="/login" />;
    };
}

export default Auth;
