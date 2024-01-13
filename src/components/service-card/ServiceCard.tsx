import { IServiceData } from "../../interfaces/service-data-type";
import "./service-card.css";

interface IProps {
    item: IServiceData;
}

const ServiceCard: React.FC<IProps> = ({ item }) => {
    return (
        <div className="service__item">
            <div className="service__img">
                <img src={item.imgUrl} alt="" />
            </div>
            <h5>{item.title}</h5>
            <p>{item.desc}</p>
        </div>
    );
};

export default ServiceCard;
