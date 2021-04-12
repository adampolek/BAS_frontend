import React, {useState} from 'react';
import JAMButton from '../components/JAMButton';
import JAMCol from '../components/JAMCol';
import JAMInput from '../components/JAMInput';
import JAMPanel from '../components/JAMPanel';
import JAMLine from '../components/JAMLine';
import JAMRow from '../components/JAMRow';
import JAMLabel from '../components/JAMLabel';
import JAMDatePicker from 'react-date-picker';
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

    // const [removeAccountPassword, setRemoveAccountPassword] = useState('');

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
            <JAMPanel width={"100%"} height={"100%"}>
                <JAMCol>
                    <JAMLabel style={{padding: "10px"}} caption='Personal information' big bold/>
                    <JAMLine />
                    <JAMRow>
                        <JAMInput caption='First Name' width="300px" value={firstName}
                               onChange={(e) => setFirstName(e.target.value)}/>
                        <JAMInput caption='Last Name' width="300px" value={lastName}
                               onChange={(e) => setLastName(e.target.value)}/>
                        <JAMInput type='number' caption='Height' width="300px" value={height}
                               onChange={(e) => setHeight(e.target.value)}/>
                    </JAMRow>
                    <JAMRow>
                        <label>Gender: </label>
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
                    </JAMRow>
                    <JAMRow>
                        <label>Birth date: </label>
                        <JAMDatePicker
                            onChange={setBirthDate}
                            value={birthDate}
                        />
                    </JAMRow>
                    <JAMRow>
                        <JAMButton value="Save" onClick={() => updateAccountInfo()}/>
                    </JAMRow>
                        <JAMLabel style={{padding: "10px"}} caption='E-mail address' big bold/>
                    <JAMLine />
                    <JAMRow>
                        <JAMInput caption='E-mail address' width="300px" value={email}
                               onChange={(e) => setEmail(e.target.value)}/>
                        <JAMInput caption='Password' width="300px" type="password" value={emailPassword}
                               onChange={(e) => setEmailPassword(e.target.value)}/>
                    </JAMRow>
                    <JAMRow>
                        <JAMButton value="Save" onClick={() => changeEmail()}/>
                    </JAMRow>
                        <JAMLabel style={{padding: "10px"}} caption='Password' big bold/>
                    <JAMLine />
                    <JAMRow>
                        <JAMInput caption='Current password' width="300px" type="password" value={currentPassword}
                               onChange={(e) => setCurrentPassword(e.target.value)}/>
                        <JAMInput caption='New password' width="300px" type="password" value={newPassword}
                               onChange={(e) => setNewPassword(e.target.value)}/>
                        <JAMInput caption='Confirm password' width="300px" type="password" value={confirmPassword}
                               onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </JAMRow>
                    <JAMRow>
                        <JAMButton value="Save" onClick={() => updatePassword()}/>
                    </JAMRow>
                        <JAMLabel style={{padding: "10px"}} caption='Delete your account' big bold/>
                    <JAMLine />
                    <JAMInput caption='Confirm password' width="300px" type="password" />
                    <JAMButton value="Delete account" />
                </JAMCol>
            </JAMPanel>
        </div>
    )
}

export default Account;