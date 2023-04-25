import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import first from '../../assets/1.png'
import second from '../../assets/2.png'
import third from '../../assets/3.png'

const News = () => {
  const news = useLoaderData();
  const {
    _id,
    category_id,
    rating,
    total_view,
    title,
    author,
    image_url,
    details,
    img,
  } = news;
  return (
    <div>
      <h4>Dragon News</h4>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title className="fw-bold">{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="danger">
              <FaArrowLeft className="me-2" />
              All news in this category
            </Button>
          </Link>
        </Card.Body>
      </Card>

      <div className="mt-5">
        <h4>Editors Insight</h4>
        <CardGroup className="mt-4 gap-4">
          <Card style={{height: '100px'}}>
            <Card.Img variant="top" src={first} />
            <Card.Body>
              <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={second} />
            <Card.Body>
              <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={third} />
            <Card.Body>
              <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export default News;
