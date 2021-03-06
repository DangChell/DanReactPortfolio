import React, { Component } from 'react';
import { Card, CardDeck } from 'react-bootstrap';

class CardGroup extends Component {
  render() {
    return (
      <div class="cardDeckContainer">
        <CardDeck>
          <Card>
            {/* <Card.Img
              variant="top"
              src="https://camo.githubusercontent.com/b716eb1b6d971a7c0cdff77baa13d771ff340d56/68747470733a2f2f692e696d6775722e636f6d2f4a6d30423938662e706e67"
            /> */}
            <Card.Body>
              <Card.Title>
                <h4>TopoGraphQL</h4>
              </Card.Title>
              <Card.Text>
                TopoGraphQL is an open-source GraphQL IDE, schema visualizer,
                and endpoint analytics tool. Inpsired by GraphiQL,TopoGraphQL
                provides developers a streamlined, in-browser solution for
                navigating and testing complex GraphQL APIs and queries. Built
                Using:
                <ul>
                  <li>React</li>
                  <li>D3</li>
                  <li>Ant Design Library</li>
                  <li>Amazon Web Services</li>
                  <li>Docker</li>
                  <li>GraphQL</li>
                  <li>SQL</li>
                  <li>Node</li>
                  <li>Express</li>
                  <li>Bcrypt</li>
                  <li>JWTs</li>
                  <li>Webpack</li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link class="link" href="http://topographql.com/">
                Visit Project
              </Card.Link>
              <Card.Link
                class="link"
                href="https://github.com/topographql/topographql"
              >
                See Code
              </Card.Link>
            </Card.Footer>
          </Card>
          <Card>
            {/* <Card.Img
              variant="top"
              src="https://scontent.ffsd3-1.fna.fbcdn.net/v/t1.0-9/115772182_10158278516435792_8509649749366949457_n.jpg?_nc_cat=103&_nc_sid=8bfeb9&_nc_ohc=VQYeTGRgJbMAX-1EveG&_nc_ht=scontent.ffsd3-1.fna&oh=9d13467f22fbf13fbfc95845acc104a7&oe=5F842B5B"
            /> */}
            <Card.Body>
              <Card.Title>
                <h4>Dev Marketplace</h4>
              </Card.Title>
              <Card.Text>
                Dev Marketplace is an online portal for software engineers and
                employers. It features a job postings board, along with video
                chat functionality. Built Using:
                <ul>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Socket.io</li>
                  <li>Javascript</li>
                  <li>Postgres</li>
                  <li>Node</li>
                  <li>Express</li>
                  <li>Webpack</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              {/* <Card.Link href="#">Visit Project</Card.Link> */}
              <Card.Link
                class="link"
                href="https://github.com/Porcupine-Software-Solutions/devMarketplace"
              >
                See Code
              </Card.Link>
            </Card.Footer>
          </Card>
          <Card>
            {/* <Card.Img
              variant="top"
              src="https://scontent.ffsd3-1.fna.fbcdn.net/v/t1.0-9/115772182_10158278516435792_8509649749366949457_n.jpg?_nc_cat=103&_nc_sid=8bfeb9&_nc_ohc=VQYeTGRgJbMAX-1EveG&_nc_ht=scontent.ffsd3-1.fna&oh=9d13467f22fbf13fbfc95845acc104a7&oe=5F842B5B"
            /> */}
            <Card.Body>
              <Card.Title>
                <h4>Therme</h4>
              </Card.Title>
              <Card.Text>
                Therme is a social networking site for hot spring enthusiasts to
                connect. Users are able to register, login and logout, post new
                hot springs, and comment on other user's posts. Built Using:
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>Bootstrap</li>
                  <li>MongoDB</li>
                  <li>Node</li>
                  <li>Express</li>
                  <li>Heroku</li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link class="link" href="https://therme.herokuapp.com/">
                Visit Project
              </Card.Link>
              <Card.Link
                class="link"
                href="https://github.com/DangChell/Therme"
              >
                See Code
              </Card.Link>
              {/* <Card.Link href="#">See Code</Card.Link> */}
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default CardGroup;
