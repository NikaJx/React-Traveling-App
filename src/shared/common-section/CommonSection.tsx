import { Container, Row, Col } from "reactstrap";

import "./common-section.css";

interface IProps {
    title: string;
}

const CommonSection: React.FC<IProps> = ({ title }) => {
    return (
        <section className="common__section">
            <Container>
                <Row>
                    <Col lg="12">
                        <h1>{title}</h1>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CommonSection;
