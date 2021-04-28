import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const Counter = React.lazy(() => import('../components/counter'));
const Users = React.lazy(() => import('../components/users'));
const AddUser = React.lazy(() => import('../components/users/add'));

let Container: React.FC = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Suspense fallback={<>Loading...</>}>
                <Switch>
                    <Route path="/counter" component={Counter} />
                    <Route path="/users" component={Users} />
                    <Route path="/add" component={AddUser} />
                    <Redirect from="/" to="/counter" />
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default Container;