import Button from '../components/Button';
import Col from '../components/Col';
import Input from '../components/Input';
import Panel from '../components/Panel';
import Row from '../components/Row';
import logo from '../resources/login_background.png'
import React, {useState} from 'react';
import API from "../api/API";

const Register = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showErrorUsername, setShowErrorUsername] = useState(false);
    const [showErrorEmail, setShowErrorEmail] = useState(false);
    const [showErrorPassword, setShowErrorPassword] = useState(false);
    const [showErrorConfirmPassword, setShowErrorConfirmPassword] = useState(false);

    const register = () => {
        let register = true;
        setShowErrorConfirmPassword(false);
        setShowErrorPassword(false);
        setShowErrorUsername(false);
        // if (password.trim() !== confirmPassword.trim()) {
        //     register = false;
        //     setShowErrorConfirmPassword(true);
        // }
        // if (password.length < 8) {
        //     register = false;
        //     setShowErrorPassword(true);
        // }
        // if (username.length < 4) {
        //     register = false;
        //     setShowErrorUsername(true);
        // }
        if (register) {
            setIsLoading(true);
            API.post('bas/user/register', {username: username, password: password, email: email})
                .then(res => {
                    console.log(res)
                    setIsLoading(false);
                    document.location.href = '/login';
                });
        }
    }
    return (
        <div style={{height: "100%", width: "100%", position: "absolute", backgroundColor: "purple"}}>
            <Panel width={"100%"} height={"100%"} backgroundColor={"purple"}>
                <Panel width={"90%"} height={"90%"} backgroundColor={"white"}>
                    <Col>
                        <img src={logo} alt="House image"></img>
                    </Col>
                    <Col>
                        <Row>
                            <h1 style={{fontFamily: "Trebuchet MS", padding: "10px"}}>
                                Welcome to NaszaApka
                            </h1>
                        </Row>
                        <Row style={{paddingBottom: "20px"}}>
                            <div style={{backgroundColor: "#E0E0E0", height: '2px', width: '100%'}}></div>
                            <label style={{padding: "20px", color: "#E0E0E0"}}>
                                REGISTER YOUR ACCOUNT
                            </label>
                            <div style={{backgroundColor: "#E0E0E0", height: '2px', width: '100%'}}></div>
                        </Row>
                        <Input caption='Login' width="300px" value={username} onChange={(e) => {
                            setUsername(e.target.value)
                        }}/>
                        <Input caption='Email' width="300px" type='email' value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }}/>
                        <Input caption='Password' width="300px" value={password} onChange={(e) => {
                            setPassword(e.target.value)
                        }} type='password'/>
                        <Input caption='Confirm Password' width="300px" value={confirmPassword} onChange={(e) => {
                            setConfirmPassword(e.target.value)
                        }} type='password'/>
                        <Row float='left' width='100%'>
                        </Row>
                        <Row style={{width: "100%", paddingTop: "40px"}}>
                            <Button value='Register' width={"100%"} onClick={() => {
                                console.log("Halko");
                                register();
                            }}/>
                        </Row>
                        <Row style={{paddingTop: "30px"}}>
                            <label style={{marginRight: "10px"}}>
                                Already have an account?
                            </label>
                            <a href="/login">
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