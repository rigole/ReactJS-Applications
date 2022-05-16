import React from 'react'
import {Switch, Route, Redirect} from "react-router-dom";

import {Results} from './Results'

function Routes(){
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Redirect to ="/search"/>
                </Route>
                <Route exact path="/search">
                    <Results />
                </Route>
                <Route exact path="/images">
                    <Results />
                </Route>
                <Route exact path="/news">
                    <Results />
                </Route>
                <Route exact path="/videos">
                    <Results />
                </Route>
            </Switch>
        </div>
    )
}

export default Routes