import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import ProjectCard from './Card.js';
import Home from './Home.js';
import Error from './Error.js';

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/projects" component={ProjectCard} />
          {/* <Route path="/resume" component={Resume} /> */}
          <Route component={Error} />
        </Switch>
      </main>
    );
  }
}

export default App;
