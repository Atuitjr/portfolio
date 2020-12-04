import React from 'react';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import { Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <GlobalStyle />
            <Nav />
            <Switch>
                <Route path='/' exact>
                    <AboutMe />
                </Route>
                <Route path='/projects'>
                    <Projects />
                </Route>
                <Route path='/contact'>
                    <ContactMe />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
