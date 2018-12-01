import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './containers/home/home';
import { Editor } from './containers/editor/editor';
import { Provider } from 'react-redux';
import store from './store';


const AppRouter = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact={true} path="/" component={Home} />
                    <Route exact={true} path="/home" component={Home} />
                    <Route exact={true} path="/index" component={Home} />   
                    <Route exact={true} path="/editor/:id" component={Editor} />
                </Switch>
            </Router>
        </Provider>
    );
};

export default AppRouter;