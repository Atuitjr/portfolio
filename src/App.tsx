import React from 'react';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import ProjectDetail from './pages/ProjectDetail';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {
    const location = useLocation();
    return (
        <div>
            <GlobalStyle />
            <Nav />
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <Route path='/' exact>
                        <AboutMe />
                    </Route>
                    <Route path='/projects' exact>
                        <Projects />
                    </Route>
                    <Route path='/projects/:id'>
                        <ProjectDetail />
                    </Route>
                    <Route path='/contact'>
                        <ContactMe />
                    </Route>
                </Switch>
            </AnimatePresence>
        </div>
    );
}

export default App;
