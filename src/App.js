import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import ProjectCard from './components/Card.js';
import Home from './components/Home.js';
import Error from './components/Error.js';
import Header from './components/Header.js';
import Resume from './components/Resume.js';
import './styles/styles.css';

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/projects" component={ProjectCard} />
          <Route path="/resume" component={Resume} />
          <Route component={Error} />
        </Switch>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
      </main>
    );
  }
}

export default App;
