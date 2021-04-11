import React, {useState} from 'react';
import Button from '../components/Button';
import Col from '../components/Col';
import Input from '../components/Input';
import Panel from '../components/Panel';
import Row from '../components/Row';
import logo from '../resources/login_background.png'
import Checkbox from '../components/Checkbox'
import API from "../api/API";

const Login = (props) => {
    const [check, setCheck] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);

    const login = async () => {
        setIsLoading(true);
        setShowError(false);

        API.post('bas/user/login', {
            username: username,
            password: password,
        }).then(res => {
            const token = res.data;
            localStorage.setItem('token', JSON.stringify('Bearer ' + token.jwttoken));
            API.get('bas/user/role', {headers: {Authorization: JSON.parse(localStorage.getItem('token'))}})
                .then(res => {
                    localStorage.setItem('role', JSON.stringify((res.data)));
                    document.location.href = "/";
                    setIsLoading(false);
                });
        })

    };
    return (
        <div style={{height: "100%", width: "100%", position: "absolute", backgroundColor: "purple"}}>
            <Panel width={"100%"} height={"100%"} backgroundColor={"purple"}>
                <Panel width={"90%"} height={"90%"} backgroundColor={"white"}>
                    <Col>
                        <Row>
                            <h1 style={{fontFamily: "Trebuchet MS", padding: "10px"}}>
                                Welcome Back
                            </h1>
                        </Row>
                        <Row>
                            <div style={{backgroundColor: "#E0E0E0", height: '2px', width: '100%'}}></div>
                            <label style={{padding: "20px", color: "#E0E0E0"}}>
                                LOGIN WITH USERNAME
                            </label>
                            <div style={{backgroundColor: "#E0E0E0", height: '2px', width: '100%'}}></div>
                        </Row>
                        <Input caption='Login or Email' width="300px" value={username}
                               onChange={(e) => setUsername(e.target.value)}/>
                        <Input caption='Password' width="300px" type='password' value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                        <Row float='left' style={{width: '100%'}}>
                            <Checkbox caption="Keep me logged in" width='100%' checked={check}
                                      onClick={() => setCheck(!check)}/>
                        </Row>
                        <Row style={{width: "100%", paddingTop: "20px"}}>
                            <Button value='Log in' width={"100%"} onClick={() => login()}/>
                        </Row>
                        <Row>
                            <a href="#">
                                Forgot password?
                            </a>
                        </Row>
                        <Row style={{paddingTop: "40px"}}>
                            <label style={{marginRight: "10px"}}>
                                Don't have an account yet?
                            </label>
                            <a href="/register">
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