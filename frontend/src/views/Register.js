import React from 'react';
import Button from '../components/Button';
import Col from '../components/Col';
import Input from '../components/Input';
import Panel from '../components/Panel';
import Row from '../components/Row';
import logo from '../resources/login_background.png'
import Checkbox from '../components/Checkbox'

const Register = (props) => {
    return (
        <div style={{ height: "100%", width: "100%", position: "absolute", backgroundColor: "purple" }}>
            <Panel width={"100%"} height={"100%"} backgroundColor={"purple"}>
                <Panel width={"90%"} height={"90%"} backgroundColor={"white"}>
                    <Col>
                        <img src={logo} alt="House image"></img>
                    </Col>
                    <Col>
                        <Row>
                            <h1 style={{ fontFamily: "Trebuchet MS", padding: "10px" }}>
                                Welcome to NaszaApka
                            </h1>
                        </Row>
                        <Row style={{paddingBottom: "20px"}}>
                            <div style={{ backgroundColor: "#E0E0E0", height: '2px', width: '100%' }}></div>
                            <label style={{ padding: "20px", color: "#E0E0E0" }}>
                                REGISTER YOUR ACCOUNT
                            </label>
                            <div style={{ backgroundColor: "#E0E0E0", height: '2px', width: '100%' }}></div>
                        </Row>
                        <Input caption='Login' width="300px" />
                        <Input caption='Email' width="300px" />
                        <Input caption='Password' width="300px" type='password' />
                        <Row float='left' width='100%'>
                        </Row>
                        <Row style={{ width: "100%", paddingTop: "40px" }}>
                            <Button value='Register' width={"100%"} />
                        </Row>
                        <Row style={{paddingTop: "30px"}}>
                            <label style={{ marginRight: "10px" }}>
                                Already have an account?
                            </label>
                            <a href="#">
                                Sign in!
                            </a>
                        </Row>
                    </Col>
                </Panel>
            </Panel>
        </div>
    )
}

export default Register;