import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Infos from './pages/Infos';
import Projects from './pages/Projects';
import Social from './pages/Social';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/infos" component={Infos} />
            <Route path="/projects" component={Projects} />
            <Route path="/social" component={Social} />
        </BrowserRouter>
    );
}

export default Routes;