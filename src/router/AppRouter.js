import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import AppThemeProvider from '../theme/ThemeProvider';

function AppRouter() {
    return (
        <AppThemeProvider>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
        </AppThemeProvider>
    );
}

export default AppRouter;
