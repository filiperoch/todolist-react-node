import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import App from './index';

const Router = () => {
    return (
        <Switch>
            <Route path="/todo" component={App} />

            <Redirect from="/" to="/todo" />
        </Switch>
    );

}

export default Router;
