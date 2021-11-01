import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import FontTheme from '../theme/ThemeProvider';

function AppRouter() {
    return (
        <FontTheme>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
        </FontTheme>
    );
}

export default AppRouter;
