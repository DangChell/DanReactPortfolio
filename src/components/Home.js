import Header from './Header.js';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProjectCar from './Carousel.js';
import CardGroup from './CardGroup.js';

class Home extends Component {
  render() {
    return (
      <div>
        <CardGroup />
      </div>
    );
  }
}

export default Home;
