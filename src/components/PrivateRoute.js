import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useGlobalContext } from "../Context";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const authenticated = useGlobalContext();

    console.log('authenticated', authenticated);

    return <Route {...rest} render={
        props => authenticated 
            ? <Component {...props} />
            : <Redirect to="/signin" />
    }/>;
}

export default PrivateRoute;