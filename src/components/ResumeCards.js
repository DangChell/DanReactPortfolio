import React, { Component } from 'react';
import '../styles/styles.css';

class ProjectCard extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Body class="leftCard">
            <Card.Title>Software Engineer</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Opensource
            </Card.Subtitle>
            <Card.Text>
              As an open source software developer, I've built developer tools
              and client facing projects, primarly using React, Express, and
              both SQL and NoSQL databases.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body class="rightCard">
            <Card.Title>Strider Bikes</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Opensource
            </Card.Subtitle>
            <Card.Text>
              As an open source software developer, I've built developer tools
              and client facing projects, primarly using React, Express, and
              both SQL and NoSQL databases.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card class="leftCard">
          <Card.Body>
            <Card.Title>National Outdoor Leadership School</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Opensource
            </Card.Subtitle>
            <Card.Text>
              As an open source software developer, I've built developer tools
              and client facing projects, primarly using React, Express, and
              both SQL and NoSQL databases.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card class="rightCard">
          <Card.Body>
            <Card.Title>Fulbright</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Opensource
            </Card.Subtitle>
            <Card.Text>
              As an open source software developer, I've built developer tools
              and client facing projects, primarly using React, Express, and
              both SQL and NoSQL databases.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card class="leftCard">
          <Card.Body>
            <Card.Title>California Lutheran University </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content. card text
            </Card.Text>
          </Card.Body>
          <Card.Img
            variant="top"
            src="https://scontent.ffsd3-1.fna.fbcdn.net/v/t1.0-9/115772182_10158278516435792_8509649749366949457_n.jpg?_nc_cat=103&_nc_sid=8bfeb9&_nc_ohc=VQYeTGRgJbMAX-1EveG&_nc_ht=scontent.ffsd3-1.fna&oh=9d13467f22fbf13fbfc95845acc104a7&oe=5F842B5B"
          />
        </Card>
      </div>
    );
  }
}

export default ProjectCard;
