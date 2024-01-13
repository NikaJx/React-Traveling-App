import { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";

import loginImg from "../../assets/images/login.png";
import userIcon from "../../assets/images/user.png";

import "./login.css";

interface ILogin {
    email: string | undefined;
    password: string | undefined;
}

const Login = () => {
    const [login, setLogin] = useState<ILogin>({
        email: undefined,
        password: undefined,
    });

    const handleChange = (e: any) => {
        setLogin((prev) => ({ ...prev, [e.target.value]: e.target.value }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        console.log(login);
    };

    return (
        <section>
            <Container>
                <Row>
                    <Col lg="8" className="m-auto">
                        <div className="login__container d-flex justify-content-between">
                            <div className="login__img">
                                <img src={loginImg} alt="" />
                            </div>

                            <div className="login__form">
                                <div className="user">
                                    <img src={userIcon} alt="" />
                                </div>
                                <h5>Login</h5>

                                <Form onSubmit={handleSubmit}>
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
                                        Login
                                    </Button>
                                </Form>
                                <p>
                                    Dont hane an account?{" "}
                                    <Link to={"/register"}>Create</Link>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Login;
