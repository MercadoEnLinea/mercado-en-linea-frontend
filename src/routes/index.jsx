import React, {Suspense} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Layout from "../app/layout";

const Login = React.lazy(() => import('../app/auth'));
const Registration = React.lazy(() => import('../app/registration'));
const Home = React.lazy(() => import('../app/home'));

export default function App() {
    return (
        <Layout>
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path="/auth" component={Login} />
                        <Route path="/register" component={Registration} />
                        <Route path="*" component={Home} />
                    </Switch>
                </Suspense>
            </Router>
        </Layout>
    );
}
