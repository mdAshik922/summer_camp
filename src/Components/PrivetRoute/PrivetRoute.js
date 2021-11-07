import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
const PrivetRoute = ({children, ...rest}) => {
    const {user , isLoding}= useAuth()

    if(isLoding) {
        return "loading"
    }
    return (
        <div>
                 <Route
            {...rest}
            
            render={({ location }) => user.displayName ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
        </div>
    );
};

export default PrivetRoute;