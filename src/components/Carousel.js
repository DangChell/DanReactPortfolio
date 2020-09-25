import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class ProjectCar extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-70"
            src="https://scontent.ffsd3-1.fna.fbcdn.net/v/t1.0-9/10408599_10152858149965610_4289492839336708001_n.jpg?_nc_cat=109&_nc_sid=e3f864&_nc_ohc=LpuY0_MWH6EAX8JtECX&_nc_ht=scontent.ffsd3-1.fna&oh=201c1878d1bad4c4ce41dc9027d5edf1&oe=5F8F7742"
            alt="Landscape shot from Sky Ranch"
          />
          <Carousel.Caption>
            <h1>Welcome to DangChell</h1>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-70"
            src="https://scontent.ffsd3-1.fna.fbcdn.net/v/t31.0-8/12068420_10153619056250610_6323858538494194349_o.jpg?_nc_cat=101&_nc_sid=19026a&_nc_ohc=ou1cRBFBcU8AX-rMvKo&_nc_ht=scontent.ffsd3-1.fna&oh=3302369b2271f8bbea6ecf4bbb35114f&oe=5F8C0377"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>Dan Chell's Portfolio Website</h1>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
          <img
            className="d-block w-100 h-70"
            src="https://scontent.ffsd3-1.fna.fbcdn.net/v/t31.0-8/12314348_10153741667110610_518310565667677966_o.jpg?_nc_cat=101&_nc_sid=19026a&_nc_ohc=sbcCoykStUMAX9FrNmr&_nc_ht=scontent.ffsd3-1.fna&oh=fbcb0e6a0995fa55d7aa9d8050d93273&oe=5F8E023E"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    );
  }
}

export default ProjectCar;
