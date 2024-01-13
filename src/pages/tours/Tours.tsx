import { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../../shared/common-section/CommonSection";
import TourCard from "../../components/tour-card/TourCard";
import SearchBar from "../../shared/search-bar/SearchBar";
import NewsLetter from "../../shared/news-letter/NewsLetter";

import tourData from "../../assets/data/tours";

import "./tours.css";

const Tours = () => {
    const [pageCount, setPageCount] = useState<number>(0);
    const [page, setPage] = useState<number>(0);

    useEffect(() => {
        const pages = Math.ceil(5 / 4);
        setPageCount(pages);
    }, [page]);

    return (
        <>
            <CommonSection title="All Tours" />

            <section>
                <Container>
                    <Row>
                        <SearchBar />
                    </Row>
                </Container>
            </section>

            <section className="pt-0">
                <Container>
                    <Row>
                        {tourData.map((tour) => (
                            <Col lg="3" key={tour.id} className="mb-4">
                                <TourCard tour={tour} />
                            </Col>
                        ))}

                        <Col lg="12">
                            <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                                {[...Array(pageCount).keys()].map(
                                    (number: any) => (
                                        <span
                                            key={number}
                                            onClick={() => setPage(number)}
                                            className={
                                                page === number
                                                    ? "active__page"
                                                    : ""
                                            }
                                        >
                                            {number + 1}
                                        </span>
                                    )
                                )}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <NewsLetter />
        </>
    );
};

export default Tours;
