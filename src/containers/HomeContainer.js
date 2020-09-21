import Header from '../components/Header.js';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProjectCar from '../components/Carousel.js';
import CardGroup from '../components/CardGroup.js';
import { Card, CardDeck } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <ProjectCar></ProjectCar>
        <CardGroup />
      </div>
    );
  }
}

export default Home;
