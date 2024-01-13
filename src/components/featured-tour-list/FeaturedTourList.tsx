import { useState } from "react";
import TourCard from "../tour-card/TourCard";
import tourData from "../../assets/data/tours";
import { Col } from "reactstrap";
import { IDataTours } from "../../interfaces/tour-data-type";

const FeaturedTourList = () => {
    const [tourDatas, setTourDatas] = useState<IDataTours[]>(tourData);

    return (
        <>
            {tourDatas.map((tour) => (
                <Col lg="3" key={tour.id} className="mb-4">
                    <TourCard tour={tour} />
                </Col>
            ))}
        </>
    );
};

export default FeaturedTourList;
