import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

import HomeScreen from './pages/HomeScreen';

export default () => {
    const name = useSelector(state => state.user.name);

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomeScreen />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}