import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './index.css';
import App from './App';
import About from './about-page/about';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route exact path="/about" component={About} />
        </Switch>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
