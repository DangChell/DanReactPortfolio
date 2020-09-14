import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class ProjectCar extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://scontent.ffsd3-1.fna.fbcdn.net/v/t1.0-9/115772182_10158278516435792_8509649749366949457_n.jpg?_nc_cat=103&_nc_sid=8bfeb9&_nc_ohc=VQYeTGRgJbMAX-1EveG&_nc_ht=scontent.ffsd3-1.fna&oh=9d13467f22fbf13fbfc95845acc104a7&oe=5F842B5B"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://scontent.ffsd3-1.fna.fbcdn.net/v/t1.0-9/46171953_10101557208075496_3501406521093259264_n.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=GNvXieV0SD0AX_3mT0F&_nc_ht=scontent.ffsd3-1.fna&oh=d51b306a3c53167501c0eef28b5715a8&oe=5F82A125"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://scontent.ffsd3-1.fna.fbcdn.net/v/t31.0-8/14991380_10154589765635610_7104761101112099960_o.jpg?_nc_cat=104&_nc_sid=cdbe9c&_nc_ohc=AjzXQbpCAEAAX-Hf_cJ&_nc_ht=scontent.ffsd3-1.fna&oh=d19b2bd9084c2c0071d26106578e44ad&oe=5F831DB5"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default ProjectCar;
