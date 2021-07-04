import React, {Suspense} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const Login = React.lazy(() => import('../app/auth'));
const Registration = React.lazy(() => import('../app/registration'));

export default function App() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path="/auth" component={Login} />
                    <Route path="/register" component={Registration} />
                </Switch>
            </Suspense>
        </Router>
    );
}
