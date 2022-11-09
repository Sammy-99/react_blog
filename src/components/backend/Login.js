import React, { useState } from "react";
import { Button, Form, Col, Row, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const navigate = useNavigate();
    const baseUrl = "http://localhost:9900";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailErr, setEmailErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    const [userData, setUserData] = useState({});
    const [credentialErr, setCredentialErr] = useState("");

    function emailHandler(e) {
        let email = e.target.value.trim();
        let nameAttr = e.target.name;
        let emailRegex =
            /^[0-9a-z_]+(?:\.[0-9a-z]+)*@[a-z0-9]{2,}(?:\.[a-z]{2,})+$/i;

        email.length === 0
            ? setEmailErr("")
            : !emailRegex.test(email)
            ? setEmailErr("Not a valid Email.")
            : setEmailErr(false);

        setEmail(email);
        setUserData({ ...userData, [nameAttr]: email });
    }

    function passwordHandler(e) {
        let password = e.target.value.trim();
        let nameAttr = e.target.name;

        password.length < 8 && password.length > 0
            ? setPassErr("Password should not be less than 8 characters.")
            : password.length === 0
            ? setPassErr("")
            : setPassErr(false);

        setPassword(password);
        setUserData({ ...userData, [nameAttr]: password });
    }

    async function login(e) {
        e.preventDefault();

        let payload = {
            email: email,
            password: password,
        };
        console.log('before---');
        let res = await axios.post(`${baseUrl}/login`, payload);
            console.log("return value is --");
        let { status, message } = res.data;
            if(status){
                console.log('innnnnn');
                setPassErr(message);
                // localStorage.setItem('username', name);
                // navigate('/')
            }else{
                setPassErr(message);
            }
    }

    console.log('afterrrr---');

    return (
        <>
            <Container>
                <Row className="signup-form">
                    <Col xs={4}></Col>
                    <Col className="border rounded">
                        <Form onSubmit={login} className="my-3">
                            <h3>LogIn Form</h3>
                            <hr />
                            <Row className="mb-3">
                                <Col xs={3}>
                                    <Form.Label> Email address</Form.Label>
                                </Col>
                                <Col>
                                    <Form.Control
                                        type="text"
                                        name="email"
                                        placeholder="Enter email"
                                        onChange={emailHandler}
                                    />
                                    {emailErr ? (
                                        <span className="text-danger">
                                            {emailErr}
                                        </span>
                                    ) : (
                                        ""
                                    )}
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Col xs={3}>
                                    <Form.Label> Password </Form.Label>
                                </Col>
                                <Col>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        placeholder="Enter Password"
                                        onChange={passwordHandler}
                                    />
                                    {passErr ? (
                                        <span className="text-danger">
                                            {passErr}
                                        </span>
                                    ) : (
                                        ""
                                    )}
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Col xs={3}>
                                    <Button variant="primary" type="submit">
                                        LogIn
                                    </Button>
                                </Col>
                                <Col>
                                    <Link
                                        to="/register"
                                        className="text-primary fw-bold"
                                    >
                                        Do not have an account? create account
                                    </Link>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Login;
