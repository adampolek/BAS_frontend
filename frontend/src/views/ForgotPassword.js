import React, {useState} from 'react';
import JAMButton from '../components/JAMButton';
import JAMCol from '../components/JAMCol';
import JAMInput from '../components/JAMInput';
import JAMPanel from '../components/JAMPanel';
import API from "../api/API";

const ForgotPassword = () => {

    const [email, setEmail] = useState('');

    const sendForgotPassword = async () => {
        API.post("bas/user/forgot-password", {email: email}).then(res => {
            console.log(res);
        })
    }
    return (
        <JAMPanel width={"100%"} height={"100%"} backgroundColor={"purple"} style={{position: "absolute"}}>
            <JAMPanel width={"90%"} maxWidth={"1300px"} backgroundColor={"white"} minWidth='400px'>
                <JAMCol>
                    <JAMInput caption='Email' width="300px" value={email}
                              onChange={(e) => setEmail(e.target.value)}/>
                    <JAMButton value='Send' onClick={() => sendForgotPassword()}/>
                </JAMCol>
                <JAMCol>

                </JAMCol>
            </JAMPanel>
        </JAMPanel>
    );
}

export default ForgotPassword;