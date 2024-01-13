import ServiceCard from "../service-card/ServiceCard";
import { IServiceData } from "../../interfaces/service-data-type";
import { Col } from "reactstrap";

import weatherImg from "../../assets/images/weather.png";
import guideImg from "../../assets/images/guide.png";
import customizationImg from "../../assets/images/customization.png";

const serviceData: IServiceData[] = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, iusto.",
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, iusto.",
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, iusto.",
    },
];

const ServiceList = () => {
    return (
        <>
            {serviceData.map((item, i) => (
                <Col key={i} lg="3">
                    <ServiceCard item={item} />
                </Col>
            ))}
        </>
    );
};

export default ServiceList;
