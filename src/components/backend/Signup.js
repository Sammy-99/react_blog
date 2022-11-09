import React, {useState} from "react";
import { Button, Form, Col, Row, Container } from "react-bootstrap";
import {Link, Outlet} from "react-router-dom";

function Signup() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPass, setConfpass] = useState('');
    const [nameErr, setNameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    const [confpassErr, setConfpassErr] = useState(false);
    const [userData, setUserData] = useState({});

    function nameHandler(e)
    {
        let userName = e.target.value.trim();
        let nameAttr = e.target.name;
        var reg = /^[a-z ]+$/i;

        (userName.length < 3 && userName.length > 0) 
            ? setNameErr('Name should not be less than 3 characters.')
            : (userName.length === 0) 
                ? setNameErr('')
                : (!reg.test(userName))
                    ? setNameErr('Name should be alphabetic.')
                    : setNameErr(false) ;

        setName(userName);
        setUserData({...userData, [nameAttr] : userName});

    }

    function emailHandler(e)
    {
        let email = e.target.value.trim();
        let nameAttr = e.target.name;
        let emailRegex = /^[0-9a-z_]+(?:\.[0-9a-z]+)*@[a-z0-9]{2,}(?:\.[a-z]{2,})+$/i;

        (email.length === 0) 
            ? setEmailErr('')
            : (!emailRegex.test(email)) 
                ? setEmailErr('Not a valid Email.')
                : setEmailErr(false);

        setEmail(email);
        setUserData({...userData, [nameAttr] : email});
    }

    function passwordHandler(e)
    {
        let password = e.target.value.trim();
        let nameAttr = e.target.name;

        (password.length < 8 && password.length > 0) 
            ? setPassErr('Password should not be less than 8 characters.')
            : (password.length === 0) 
                ? setPassErr('')
                : setPassErr(false) ;

        setPassword(password);
        setUserData(({...userData, [nameAttr] : password}));
    }

    function confPassHandler(e)
    {
        let cPass = e.target.value.trim();
        let nameAttr = e.target.name;

        setConfpass(cPass);
        setUserData({...userData, [nameAttr] : cPass});
    }

    function saveData(e){
        e.preventDefault();
        console.log(userData)
        if(name.trim() === ''){
            setNameErr('Please Enter Name.')
        }

        if(email.trim() === ''){
            setEmailErr('Please enter Email.');
        }

        if(password.trim() === ''){
            setPassErr('Please enter Password.');
        }

        if(confPass.trim() === ''){
            setConfpassErr('Please enter Confirm Password.');
        }else if(password !== confPass){
            setConfpassErr('Password must be same.');
        }

        if(name && email && password && (password === confPass)){
            alert("all ok");
            localStorage.setItem('username', name);
            console.log((localStorage.getItem('username')));
        }
    }

    return (
        <>
            <Container>
                <Row className="signup-form">
                    <Col xs={4}></Col>
                    <Col className="border rounded">
                        <Form onSubmit={saveData} className="my-3">
                            <h3>Create Account</h3>
                            <hr />
                                <Row className="mb-3">
                                    <Col xs={3}>
                                        <Form.Label> Name </Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            placeholder="Enter Name"
                                            onChange={nameHandler}
                                        />
                                        { (nameErr !== false) ? <span className='text-danger'>{nameErr}</span> : '' }
                                    </Col>
                                </Row >
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
                                        { emailErr ? <span className='text-danger'>{emailErr}</span> : '' }
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
                                        { passErr ? <span className='text-danger'>{passErr}</span> : '' }
                                    </Col>
                                </Row>

                        
                                <Row className="mb-3">
                                    <Col xs={3}>
                                        <Form.Label> Confirm Password </Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="password"
                                            name="confPass"
                                            placeholder="Enter Password"
                                            onChange={confPassHandler}
                                        />
                                        { confpassErr ? <span className='text-danger'>{confpassErr}</span> : '' }
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col xs={3}>
                                        
                                    </Col>
                                    <Col>
                                        <Form.Check
                                            type="checkbox"
                                            label="Agree Term And Conditions"
                                        />
                                    </Col>
                                </Row> 

                                 <Row className="mb-3">
                                    <Col xs={3}>
                                        <Button 
                                            variant="primary" 
                                            type="submit"
                                            
                                        >
                                            Submit
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Link to="/" className="text-primary fw-bold">Already have an account? SingIn</Link>
                                    </Col>
                                </Row>                             
                    
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Signup;
