import React, { useState } from 'react';
import Button from '../components/Button';
import Col from '../components/Col';
import Input from '../components/Input';
import Panel from '../components/Panel';
import Row from '../components/Row';
import logo from '../resources/login_background.png'
import Checkbox from '../components/Checkbox'

const Login = (props) => {
    const [check, setCheck] = useState(false);
    return (
        <div style={{ height: "100%", width: "100%", position: "absolute", backgroundColor: "purple" }}>
            <Panel width={"100%"} height={"100%"} backgroundColor={"purple"}>
                <Panel width={"90%"} height={"90%"} backgroundColor={"white"}>
                    <Col>
                        <Row>
                            <h1 style={{ fontFamily: "Trebuchet MS", padding: "10px" }}>
                                Welcome Back
                            </h1>
                        </Row>
                        <Row>
                            <div style={{ backgroundColor: "#E0E0E0", height: '2px', width: '100%' }}></div>
                            <label style={{ padding: "20px", color: "#E0E0E0" }}>
                                LOGIN WITH USERNAME
                            </label>
                            <div style={{ backgroundColor: "#E0E0E0", height: '2px', width: '100%' }}></div>
                        </Row>
                        <Input caption='Login or Email' width="300px" />
                        <Input caption='Password' width="300px" type='password' />
                        <Row float='left' style={{width: '100%'}}>
                            <Checkbox caption="Keep me logged in" width='100%' checked={check} onClick={() => setCheck(!check)} />
                        </Row>
                        <Row style={{ width: "100%", paddingTop: "20px" }}>
                            <Button value='Log in' width={"100%"} />
                        </Row>
                        <Row>
                            <a href="#">
                                Forgot password?
                                </a>
                        </Row>
                        <Row style={{ paddingTop: "40px" }}>
                            <label style={{ marginRight: "10px" }}>
                                Don't have an account yet?
                            </label>
                            <a href="#">
                                Sign in!
                            </a>
                        </Row>
                    </Col>
                    <Col>
                        <img src={logo} alt="House image"></img>
                    </Col>
                </Panel>
            </Panel>
        </div>
    )
}

export default Login;