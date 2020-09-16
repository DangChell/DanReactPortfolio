import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class ProjectCard extends Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src="https://scontent.ffsd3-1.fna.fbcdn.net/v/t1.0-9/115772182_10158278516435792_8509649749366949457_n.jpg?_nc_cat=103&_nc_sid=8bfeb9&_nc_ohc=VQYeTGRgJbMAX-1EveG&_nc_ht=scontent.ffsd3-1.fna&oh=9d13467f22fbf13fbfc95845acc104a7&oe=5F842B5B"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content. card text
          </Card.Text>
          <Card.Link href="#">See Project</Card.Link>
          <Card.Link href="#">See Code</Card.Link>
        </Card.Body>
      </Card>
    );
  }
}

export default ProjectCard;
