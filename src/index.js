import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Post from './pages/Post';
import NotFound from './pages/NotFound'

ReactDOM.render(
<Router>
  <div>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/404" component={NotFound}/>
    <Route exact path="/post/:id" render={props => <Post {...props}/>}/>
  </div>
</Router>

,document.getElementById('root'));

