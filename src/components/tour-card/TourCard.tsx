import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import "./tour-card.css";
import { IDataTours } from "../../interfaces/tour-data-type";

interface IProps {
    tour: IDataTours;
}

const TourCard: React.FC<IProps> = ({ tour }) => {
    const totalRating = tour.reviews.reduce(
        (acc, item) => acc + item.rating,
        0
    );
    const avgRating =
        totalRating === 0
            ? ""
            : totalRating === 1
            ? totalRating
            : totalRating / tour.reviews.length;

    return (
        <div className="tour__card">
            <Card>
                <div className="tour__img">
                    <img src={tour.photo} alt={tour.title} />
                    {tour.featured && <span>Featured</span>}
                </div>

                <CardBody>
                    <div className="card__top d-flex align-items-center justify-content-between">
                        <span className="tour__location d-flex align-items-center gap-1">
                            <i className="ri-map-pin-line"></i> {tour.city}
                        </span>
                        <span className="tour__rating d-flex align-items-center gap-1">
                            <i className="ri-star-fill"></i>{" "}
                            {tour.avgRating === 0 ? null : avgRating}
                            {totalRating === 0 ? (
                                "Not rated"
                            ) : (
                                <span>{tour.reviews.length}</span>
                            )}
                        </span>
                    </div>
                    <h5 className="tour__title">
                        <Link to={`/tours/${tour.id}`}>{tour.title}</Link>
                    </h5>

                    <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
                        <h5>
                            ${tour.price} <span> /per person</span>{" "}
                        </h5>
                        <button className="btn booking__btn">
                            <Link to={`/tours/${tour.id}`}>Book Now</Link>
                        </button>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default TourCard;
