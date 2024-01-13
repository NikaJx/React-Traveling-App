import { useState, useRef } from "react";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import tourData from "../../assets/data/tours";
import Booking from "../../components/booking/Booking";
import NewsLetter from "../../shared/news-letter/NewsLetter";

import avatar from "../../assets/images/avatar.jpg";

import "./tour-details.css";

const TourDetails = () => {
    const { id } = useParams();

    const reviewsRef = useRef<string | any>("");
    const [tourRating, setTourRating] = useState<number | null>(null);

    const tour = tourData.find((tour) => tour.id === id);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const reviewText = reviewsRef.current.value;
        alert(`${reviewText}, ${tourRating}`);
    };

    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col lg="8">
                            <div className="tour__content">
                                <img src={tour?.photo} alt={tour?.title} />

                                <div className="tour__info">
                                    <h2>{tour?.title}</h2>

                                    <div className="d-flex align-items-center gap-5">
                                        <span className="tour__rating d-flex align-items-center gap-1">
                                            <i className="ri-star-fill"></i> 4.5
                                        </span>

                                        <span>
                                            <i className="ri-map-pin-fill">
                                                {tour?.address}
                                            </i>
                                        </span>
                                    </div>

                                    <div className="tour__extra-details">
                                        <span>
                                            <i className="ri-map-pin-2-line"></i>
                                            {tour?.city}
                                        </span>
                                        <span>
                                            <i className="ri-money-dollar-circle-line"></i>
                                            ${tour?.price}
                                        </span>
                                        <span>
                                            <i className="ri-map-pin-time-line"></i>
                                            {tour?.distance} k/m
                                        </span>
                                        <span>
                                            <i className="ri-group-line"></i>
                                            {tour?.maxGroupSize} people
                                        </span>
                                    </div>

                                    <h5>Description</h5>
                                    <p>{tour?.desc}</p>
                                </div>

                                <div className="tour__reviews mt-4">
                                    <h4>
                                        Reviews ({tour?.reviews.length} reviews)
                                    </h4>

                                    <Form onSubmit={handleSubmit}>
                                        <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                                            <span
                                                onClick={() => setTourRating(1)}
                                            >
                                                1{" "}
                                                <i className="ri-star-s-fill"></i>
                                            </span>
                                            <span
                                                onClick={() => setTourRating(2)}
                                            >
                                                2{" "}
                                                <i className="ri-star-s-fill"></i>
                                            </span>
                                            <span
                                                onClick={() => setTourRating(3)}
                                            >
                                                3{" "}
                                                <i className="ri-star-s-fill"></i>
                                            </span>
                                            <span
                                                onClick={() => setTourRating(4)}
                                            >
                                                4{" "}
                                                <i className="ri-star-s-fill"></i>
                                            </span>
                                            <span
                                                onClick={() => setTourRating(5)}
                                            >
                                                5{" "}
                                                <i className="ri-star-s-fill"></i>
                                            </span>
                                        </div>

                                        <div className="review__input">
                                            <input
                                                type="text"
                                                placeholder="Share your thoughts"
                                                ref={reviewsRef}
                                                required
                                            />
                                            <button
                                                className="btn primary__btn text-white"
                                                type="submit"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </Form>

                                    <ListGroup className="user__reviews">
                                        {tour?.reviews.map((review) => (
                                            <div
                                                className="review__item"
                                                key={review.name}
                                            >
                                                <img src={avatar} alt="" />
                                                <div className="w-100">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <h5>Nika</h5>
                                                            <p>
                                                                {new Date(
                                                                    "01-18-22-024"
                                                                ).toLocaleDateString(
                                                                    "en-US"
                                                                )}
                                                            </p>
                                                        </div>
                                                        <span className="d-flex align-items-center">
                                                            5{" "}
                                                            <i className="ri-star-s-fill"></i>
                                                        </span>
                                                    </div>
                                                    <h6>Amazing tour</h6>
                                                </div>
                                            </div>
                                        ))}
                                    </ListGroup>
                                </div>
                            </div>
                        </Col>

                        <Col lg="4">
                            <Booking tour={tour} />
                        </Col>
                    </Row>
                </Container>
            </section>

            <NewsLetter />
        </>
    );
};

export default TourDetails;
