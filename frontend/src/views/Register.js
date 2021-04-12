import JAMButton from '../components/JAMButton';
import JAMCol from '../components/JAMCol';
import JAMInput from '../components/JAMInput';
import JAMPanel from '../components/JAMPanel';
import JAMRow from '../components/JAMRow';
import JAMImage from '../components/JAMImage';
import JAMLine from '../components/JAMLine';
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

    const register = async () => {
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
    //todo: change validation
    // const validate = () => {
    //    var reg = /^[A-Z]*$/;
    //    var test = reg.test(password);
    //    if (test) {
    //       alert('pass');
    //       this.setState({value: password});
    //    }else{
    //      alert('fail');
    //    } 
    // }

    return (
        <div style={{height: "100%", width: "100%", position: "absolute", backgroundColor: "purple"}}>
            <JAMPanel width={"100%"} height={"100%"} backgroundColor={"purple"}>
                <JAMPanel width={"90%"} height={"90%"} maxWidth={"1300px"} backgroundColor={"white"} minWidth="400px">
                    <JAMCol>
                    <JAMImage icon={logo} note='House image' />
                    </JAMCol>
                    <JAMCol>
                        <JAMRow>
                            <h1 style={{fontFamily: "Trebuchet MS", padding: "10px"}}>
                                Welcome to NaszaApka
                            </h1>
                        </JAMRow>
                        <JAMRow style={{paddingBottom: "20px"}}>
                            <JAMLine />
                            <label style={{padding: "20px", color: "#E0E0E0"}}>
                                REGISTER YOUR ACCOUNT
                            </label>
                            <JAMLine />
                        </JAMRow>
                        <JAMInput caption='Login' width="300px" value={username} onChange={(e) => {
                            setUsername(e.target.value)
                        }}/>
                        <JAMInput caption='Email' width="300px" type='email' value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }}/>
                        <JAMInput caption='Password' width="300px" value={password} onChange={(e) => {
                            setPassword(e.target.value)
                        }} type='password'/>
                        <JAMInput caption='Confirm Password' width="300px" value={confirmPassword} onChange={(e) => {
                            setConfirmPassword(e.target.value)
                        }} type='password'/>
                        <JAMRow float='left' width='100%'>
                        </JAMRow>
                        <JAMRow style={{width: "100%", paddingTop: "40px"}}>
                            <JAMButton value='Register' width={"100%"} onClick={() => {
                                console.log("Halko");
                                register();
                            }}/>
                        </JAMRow>
                        <JAMRow style={{paddingTop: "30px"}}>
                            <label style={{marginRight: "10px"}}>
                                Already have an account?
                            </label>
                            <a href="/login">
                                Sign in!
                            </a>
                        </JAMRow>
                    </JAMCol>
                </JAMPanel>
            </JAMPanel>
        </div>
    )
}

export default Register;