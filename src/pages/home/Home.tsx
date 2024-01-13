import { Container, Row, Col } from "reactstrap";
import Subtitle from "../../shared/subtitle/Subtitle";
import SearchBar from "../../shared/search-bar/SearchBar";
import ServiceList from "../../components/service-list/ServiceList";
import FeaturedTourList from "../../components/featured-tour-list/FeaturedTourList";
import MasonryImagesGallery from "../../components/image-gallery/MasonryImagesGallery";
import Testomonial from "../../components/testomonial/Testomonial";
import NewsLetter from "../../shared/news-letter/NewsLetter";

import heroImg from "../../assets/images/hero-img01.jpg";
import heroImg02 from "../../assets/images/hero-img02.jpg";
import heroVideo from "../../assets/images/hero-video.mp4";
import worldImg from "../../assets/images/world.png";
import experienceImg from "../../assets/images/experience.png";

import "./home.css";

const Home = () => {
    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col lg="6">
                            <div className="hero__content">
                                <div className="hero__subtitle d-flex align-items-center">
                                    <Subtitle subtitle={"Know Before You Go"} />
                                    <img src={worldImg} alt="" />
                                </div>
                                <h1>
                                    Traveling opens the door to creating{" "}
                                    <span className="highlight">memories</span>
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Voluptas optio nulla enim
                                    culpa! Similique expedita unde iusto, natus
                                    dolor nihil provident suscipit commodi
                                    reprehenderit distinctio! Voluptate at optio
                                    cum nulla eos quam laudantium rerum, labore
                                    sequi amet quidem dolorum voluptas.
                                </p>
                            </div>
                        </Col>
                        <Col lg="2">
                            <div className="hero__img-box">
                                <img src={heroImg} alt="" />
                            </div>
                        </Col>
                        <Col lg="2">
                            <div className="hero__img-box mt-4">
                                <video src={heroVideo} controls />
                            </div>
                        </Col>
                        <Col lg="2">
                            <div className="hero__img-box mt-5">
                                <img src={heroImg02} alt="" />
                            </div>
                        </Col>
                        <SearchBar />
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg="3">
                            <h5 className="services__subtitle">
                                What we serve
                            </h5>
                            <h2 className="services__title">
                                We offer our best services
                            </h2>
                        </Col>
                        <ServiceList />
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="mb-5">
                            <Subtitle subtitle={"Explore"} />
                            <h2 className="featured__tour-title">
                                Our featured tours
                            </h2>
                        </Col>
                        <FeaturedTourList />
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg="6">
                            <div className="experience__content">
                                <Subtitle subtitle={"Experience"} />
                                <h2>
                                    With our all expereience <br /> we will
                                    serve you
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. <br /> Enim consequuntur
                                    quidem perferendis! Velit, eos distinctio.
                                </p>
                            </div>
                            <div className="counter__wrapper d-flex align-items-center gap-5">
                                <div className="counter__box">
                                    <span>12k+</span>
                                    <h6>Successfull Trip</h6>
                                </div>
                                <div className="counter__box">
                                    <span>2k+</span>
                                    <h6>Regular clients</h6>
                                </div>
                                <div className="counter__box">
                                    <span>15</span>
                                    <h6>Year expereience</h6>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="experience__img">
                                <img src={experienceImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <Subtitle subtitle={"Gallery"} />
                            <h2 className="gallery__title">
                                Visit our customers tour gallery
                            </h2>
                        </Col>
                        <Col lg="12">
                            <MasonryImagesGallery />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <Subtitle subtitle={"Fans Love"} />
                            <h2 className="testomonital__title">
                                What our fans about us
                            </h2>
                        </Col>
                        <Col lg="12">
                            <Testomonial />
                        </Col>
                    </Row>
                </Container>
            </section>

            <NewsLetter />
        </>
    );
};

export default Home;
