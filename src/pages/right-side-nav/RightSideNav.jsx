import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { FaGoogle,FaTwitter,FaGithub , FaFacebook,FaInstagram} from 'react-icons/fa';
import QZoon from "../Shared/Q-zoon/QZoon";
import bg from '../../assets/bg1.png'

const RightSideNav = () => {
  return (
    <>
      <h5 className="fw-bold mb-4">Login With</h5>
      <div>
        <ListGroup as="ul">
          <ListGroup.Item as="li"><FaGoogle className="me-3"/>Login with Google</ListGroup.Item>
          <ListGroup.Item as="li">
            <FaGithub className="me-3"/>Login with Github
          </ListGroup.Item>
        </ListGroup>
      </div>
      <h5 className="fw-semibold mt-4">Find Us On</h5>
      <div>
      <ListGroup as="ul">
          <ListGroup.Item as="li"><FaFacebook className="me-3"/>Facebook</ListGroup.Item>
          <ListGroup.Item as="li">
            <FaTwitter className="me-3"/>Twitter
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <FaInstagram className="me-3"/>Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZoon/>

      <div>
      <Card className="bg-dark text-white w-100 text-center mt-4">
      <Card.Img src={bg} alt="Card image" />
      <Card.ImgOverlay className="p-5">
        <Card.Title>Create an Amazing Newspaper</Card.Title>
        <Card.Text>
        Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
        </Card.Text>
        <Button variant="danger">Learn More</Button>
      </Card.ImgOverlay>
    </Card>
      </div>
    </>
  );
};

export default RightSideNav;
