import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Infos from './pages/Infos';
import Projects from './pages/Projects';
import Social from './pages/Social';
import Coresf from './pages/Coresf';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/sobre-nos" component={About} />
            <Route path="/contato" component={Contact} />
            <Route path="/como-ajudar" component={Infos} />
            <Route path="/projetos" component={Projects} />
            <Route path="/na-media" component={Social} />
            <Route path="/cores-femininas" component={Coresf} />
        </BrowserRouter>
    );
}

export default Routes;