import React, {useState} from 'react';
import Button from '../components/Button';
import Col from '../components/Col';
import Input from '../components/Input';
import Panel from '../components/Panel';
import Row from '../components/Row';
import DatePicker from 'react-date-picker';
import API from "../api/API";

let initialRead = true;

const Account = (props) => {


    const [user, setUser] = useState({});

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [height, setHeight] = useState('');
    const [gender, setGender] = useState('');
    const [birthDate, setBirthDate] = useState(new Date());

    const [email, setEmail] = useState('');
    const [emailPassword, setEmailPassword] = useState('');

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const updateAccountInfo = async () => {
        API.put("bas/user/account", Object.assign({},
            user, {firstName: firstName}, {lastName: lastName},
            {height: height}, {gender: gender}, {birthDate: birthDate}),
            {headers: {Authorization: JSON.parse(localStorage.getItem('token'))}}).then(res => {
            console.log(res);
        })
    };
    const changeEmail = async () => {
        API.put("bas/user/account", Object.assign({}, user,{
            email: email
        }), {headers: {Authorization: JSON.parse(localStorage.getItem('token'))}}).then(res => {
            console.log(res);
        })
    }

    const updatePassword = async () => {
        API.put("bas/user/account", Object.assign({},user,{
            password: newPassword
        }), {headers: {Authorization: JSON.parse(localStorage.getItem('token'))}}).then(res => {
            console.log(res);
        })
    }
    if (initialRead) {
        API.get("bas/user/account", {headers: {Authorization: JSON.parse(localStorage.getItem('token'))}})
            .then(res => {
                initialRead = false;
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setHeight(res.data.height);
                setGender(res.data.gender === null ? 'male' : res.data.gender);
                setBirthDate(res.data.birthDate === null ? new Date() : res.data.birthDate);
                setUser(res.data);
            });
    }

    return (
        <div style={{height: "100%", width: "100%", position: "absolute", backgroundColor: "purple"}}>
            <Panel width={"100%"} height={"100%"}>
                <Col>
                    <h3 style={{fontWeight: "bold"}}>Personal information</h3>
                    <div style={{backgroundColor: "#E0E0E0", height: '2px', width: '100%'}}></div>
                    <Row>
                        <Input caption='First Name' width="300px" value={firstName}
                               onChange={(e) => setFirstName(e.target.value)}/>
                        <Input caption='Last Name' width="300px" value={lastName}
                               onChange={(e) => setLastName(e.target.value)}/>
                        <Input caption='Height' width="300px" value={height}
                               onChange={(e) => setHeight(e.target.value)}/>
                    </Row>
                    <Row>
                        <div className="radio">
                            <label>
                                <input type="radio" value="male" checked={gender === 'male'}
                                       onClick={(e) => setGender(e.target.value)}/>
                                Male
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="female" checked={gender === 'female'}
                                       onClick={(e) => setGender(e.target.value)}/>
                                Female
                            </label>
                        </div>
                    </Row>
                    <DatePicker
                        value={birthDate}
                        onChange={setBirthDate}
                    />

                    <Row>
                        <Button value="Save" onClick={() => updateAccountInfo()}/>
                    </Row>


                    <h3 style={{fontWeight: "bold"}}>E-mail address</h3>
                    <div style={{backgroundColor: "#E0E0E0", height: '2px', width: '100%'}}></div>
                    <Row>
                        <Input caption='E-mail address' width="300px" value={email}
                               onChange={(e) => setEmail(e.target.value)}/>
                        <Input caption='Password' width="300px" type="password" value={emailPassword}
                               onChange={(e) => setEmailPassword(e.target.value)}/>
                    </Row>
                    <Row>
                        <Button value="Save" onClick={() => changeEmail()}/>
                    </Row>


                    <h3 style={{fontWeight: "bold"}}>Password</h3>
                    <div style={{backgroundColor: "#E0E0E0", height: '2px', width: '100%'}}></div>
                    <Row>
                        <Input caption='Current password' width="300px" type="password" value={currentPassword}
                               onChange={(e) => setCurrentPassword(e.target.value)}/>
                        <Input caption='New password' width="300px" type="password" value={newPassword}
                               onChange={(e) => setNewPassword(e.target.value)}/>
                        <Input caption='Confirm password' width="300px" type="password" value={confirmPassword}
                               onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </Row>
                    <Row>
                        <Button value="Save" onClick={() => updatePassword()}/>
                    </Row>
                </Col>
            </Panel>
        </div>
    )
}

export default Account;