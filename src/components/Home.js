import Header from './Header.js';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProjectCar from './Carousel.js';
import CardGroup from './CardGroup.js';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <CardGroup />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
      </div>
    );
  }
}

export default Home;
