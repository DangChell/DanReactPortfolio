import React, { Component } from 'react';
import { Card, CardDeck } from 'react-bootstrap';

class CardGroup extends Component {
  render() {
    return (
      <div class="cardDeckContainer">
        <CardDeck>
          <Card>
            <Card.Img
              variant="top"
              src="https://camo.githubusercontent.com/b716eb1b6d971a7c0cdff77baa13d771ff340d56/68747470733a2f2f692e696d6775722e636f6d2f4a6d30423938662e706e67"
            />
            <Card.Body>
              <Card.Title>TopoGraphQL</Card.Title>
              <Card.Text>
                TopoGraphQL is an open-source GraphQL IDE, schema visualizer,
                and endpoint analytics tool. Inpsired by GraphiQL,TopoGraphQL
                provides developers a streamlined, in-browser solution for
                navigating and testing complex GraphQL APIs and queries.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="http://topographql.com/">
                Visit Project
              </Card.Link>
              <Card.Link href="https://github.com/topographql/topographql">
                See Code
              </Card.Link>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://scontent.ffsd3-1.fna.fbcdn.net/v/t1.0-9/115772182_10158278516435792_8509649749366949457_n.jpg?_nc_cat=103&_nc_sid=8bfeb9&_nc_ohc=VQYeTGRgJbMAX-1EveG&_nc_ht=scontent.ffsd3-1.fna&oh=9d13467f22fbf13fbfc95845acc104a7&oe=5F842B5B"
            />
            <Card.Body>
              <Card.Title>Dev Marketplace</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="#">Visit Project</Card.Link>
              <Card.Link href="https://github.com/Porcupine-Software-Solutions/devMarketplace">
                See Code
              </Card.Link>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://scontent.ffsd3-1.fna.fbcdn.net/v/t1.0-9/115772182_10158278516435792_8509649749366949457_n.jpg?_nc_cat=103&_nc_sid=8bfeb9&_nc_ohc=VQYeTGRgJbMAX-1EveG&_nc_ht=scontent.ffsd3-1.fna&oh=9d13467f22fbf13fbfc95845acc104a7&oe=5F842B5B"
            />
            <Card.Body>
              <Card.Title>YelpCamp</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="https://nameless-shore-35445.herokuapp.com/">
                Visit Project
              </Card.Link>
              <Card.Link href="#">See Code</Card.Link>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default CardGroup;
