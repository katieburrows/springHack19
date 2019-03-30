import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import CreatePost from './components/CreatePost';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            {/* <Route exact path="/" component={Home} />
            <Route exact path="/create/:id" component={Thread} /> */}
            <Route exact path="/create" component={CreatePost} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
