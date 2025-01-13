import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Button, Row, Col } from 'reactstrap';

const recipeLinks = [
  { name: 'Tasty Recipes', url: 'https://tasty.co', img: 'https://www.tasty.co/favicon.ico' },
  { name: 'AllRecipes', url: 'https://www.allrecipes.com', img: 'https://www.allrecipes.com/favicon.ico' },
  { name: 'Food Network', url: 'https://www.foodnetwork.com', img: 'https://food.fnr.sndimg.com/favicon.ico' },
  { name: 'BBC Good Food', url: 'https://www.bbcgoodfood.com', img: 'https://www.bbcgoodfood.com/favicon.ico' },
  { name: 'Epicurious', url: 'https://www.epicurious.com', img: 'https://assets.epicurious.com/favicon.ico' }
];

const HomePage = () => {
  return (
    <div className="container mt-5">
      <h1>Welcome to Recipe Hub</h1>
      <p>Find amazing recipes from various sources.</p>

      <Row>
        {recipeLinks.map((link, index) => (
          <Col key={index} sm="12" md="4" lg="3" className="mb-4">
            <Card>
              <CardImg top width="100%" src={`https://via.placeholder.com/400x250.png?text=${link.name}`} alt={link.name} />
              <CardBody>
                <CardTitle tag="h5">{link.name}</CardTitle>
                <Button color="primary" href={link.url} target="_blank">
                  Visit {link.name}
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;
