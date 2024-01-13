import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { IDataTours } from "../../interfaces/tour-data-type";
import "./booking.css";

interface IProps {
    tour: IDataTours | undefined;
}

interface ICredentials {
    userId: string;
    userEmail: string;
    fullName: string;
    phone: string;
    guestSize: number;
    bookAt: string;
}

const Booking: React.FC<IProps> = ({ tour }) => {
    const [credentials, setCredentials] = useState<ICredentials>({
        userId: "01",
        userEmail: "example@mail.ru",
        fullName: "",
        phone: "",
        guestSize: 1,
        bookAt: "",
    });

    const navigate = useNavigate();

    const handleChange = (e: any) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = (e: any) => {
        e.preventDefault();

        navigate("/thank-you");
    };

    const serviceFee = 10;
    const totalAmount =
        Number(tour?.price) * Number(credentials.guestSize) +
        Number(serviceFee);

    return (
        <div className="booking">
            <div className="booking__top d-flex align-items-center justify-content-between">
                <h3>
                    ${tour?.price} <span>/per person</span>
                </h3>
                <span className="tour__rating d-flex align-items-center">
                    <i className="ri-star-fill"></i> 4.5 ({tour?.reviews.length}
                    )
                </span>
            </div>

            <div className="booking__form">
                <h5>Information</h5>
                <Form className="booking__info-form" onSubmit={handleClick}>
                    <FormGroup>
                        <input
                            type="text"
                            placeholder="Full Name"
                            id="fullName"
                            required
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <input
                            type="number"
                            placeholder="Phone"
                            id="phone"
                            required
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup className="d-flex align-items-center gap-3">
                        <input
                            type="date"
                            placeholder="Guest"
                            id="bookAt"
                            required
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            placeholder=""
                            id="guestSize"
                            required
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Form>
            </div>

            <div className="booking__bottom">
                <ListGroup>
                    <ListGroupItem className="border-0 px-0">
                        <h5 className="d-flex align-items-center gap-1">
                            ${tour?.price} <i className="ri-close-line"></i> 1
                            person
                        </h5>
                        <span>${tour?.price}</span>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0">
                        <h5>Service charge</h5>
                        <span>$${serviceFee}</span>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0 total">
                        <h5>Total</h5>
                        <span>${totalAmount}</span>
                    </ListGroupItem>
                </ListGroup>

                <Button
                    className="btn primary__btn w-100 mt-4"
                    onClick={handleClick}
                >
                    Book Now
                </Button>
            </div>
        </div>
    );
};

export default Booking;
