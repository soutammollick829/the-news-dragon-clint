import moment from "moment/moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
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
      <Card className="mt-4">
        <Card.Header className="d-flex align-items-center">
          <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
          <div className="ps-3 flex-grow-1">
            <p className="mb-0">{author?.name}</p>
            <p>
              <small>
                {moment(author?.published_date).format("YYYY MMM D, h:mm:ss a")}
              </small>
            </p>
          </div>
          <div>
            <FaRegBookmark /> <FaShareAlt />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length < 230 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 230)}...
                <Link to={`/news/${_id}`} className="fw-bold">
                  Read More
                </Link>
              </>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex">
          <div className="flex-grow-1">
            <Rating className="me-2"
              readonly
              placeholderRating={rating?.number}
              emptySymbol={<FaRegStar/>}
              placeholderSymbol={<FaStar className="text-warning"/>}
              fullSymbol={<FaStar/>}
            />
            {rating?.number}
          </div>
          <div>
            <FaEye className="me-2" />
            {total_view}
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
