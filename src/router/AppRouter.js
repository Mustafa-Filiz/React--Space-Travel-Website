import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Crew from '../pages/Crew';
import Destination from '../pages/Destination';
import Home from '../pages/Home';
import Technology from '../pages/Technology';
import AppThemeProvider from '../theme/ThemeProvider';

function AppRouter() {
    return (
        <AppThemeProvider>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/destination" component={Destination} />
                    <Route path="/crew" component={Crew} />
                    <Route path="/technology" component={Technology} />
                </Switch>
            </Router>
        </AppThemeProvider>
    );
}

export default AppRouter;
