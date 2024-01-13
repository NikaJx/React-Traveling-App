import { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";

import registerImg from "../../assets/images/register.png";
import userIcon from "../../assets/images/user.png";

import "../login/login.css";

interface IRegister {
    email: string | undefined;
    userName: string | undefined;
    password: string | undefined;
}

const Register = () => {
    const [register, setRegister] = useState<IRegister>({
        email: undefined,
        userName: undefined,
        password: undefined,
    });

    const handleChange = (e: any) => {
        setRegister((prev) => ({ ...prev, [e.target.value]: e.target.value }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        console.log(register);
    };

    return (
        <section>
            <Container>
                <Row>
                    <Col lg="8" className="m-auto">
                        <div className="login__container d-flex justify-content-between">
                            <div className="login__img">
                                <img src={registerImg} alt="" />
                            </div>

                            <div className="login__form">
                                <div className="user">
                                    <img src={userIcon} alt="" />
                                </div>
                                <h5>Register</h5>

                                <Form onSubmit={handleSubmit}>
                                    <FormGroup>
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            id="fullName"
                                            required
                                            onChange={handleChange}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <input
                                            type="text"
                                            placeholder="Email"
                                            id="email"
                                            required
                                            onChange={handleChange}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            id="password"
                                            required
                                            onChange={handleChange}
                                        />
                                    </FormGroup>
                                    <Button
                                        className="btn secondary__btn auth__btn"
                                        type="submit"
                                    >
                                        Register
                                    </Button>
                                </Form>
                                <p>
                                    Have an account?{" "}
                                    <Link to={"/login"}>Login</Link>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Register;
