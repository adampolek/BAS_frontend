import React, {useState} from 'react';
import Button from '../components/Button';
import Col from '../components/Col';
import Input from '../components/Input';
import Panel from '../components/Panel';
import Row from '../components/Row';
import DatePicker from 'react-date-picker';


const Account = (props) => {

    const [selectedOption, setSelectedOption] = useState('');
    const [value, onChange] = useState(new Date());

    return (
        <div style={{height: "100%", width: "100%", position: "absolute", backgroundColor: "purple"}}>
            <Panel width={"100%"} height={"100%"}>
                <Col>
                    <h3 style={{fontWeight: "bold"}}>Personal information</h3>
                    <div style={{backgroundColor: "#E0E0E0", height: '2px', width: '100%'}}></div>
                    <Row>
                        <Input caption='Name' width="300px" />
                        <Input caption='Full Name' width="300px" />
                        <Input caption='Height' width="300px" />
                    </Row>
                    <Row>
                        <div className="radio">
                            <label>
                                <input type="radio" value="male" checked={selectedOption === 'male'} onClick={(e) => setSelectedOption(e.target.value)} />
                                Male
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="female" checked={selectedOption === 'female'} onClick={(e) => setSelectedOption(e.target.value)} />
                                Female
                            </label>
                        </div>
                    </Row>
                    <DatePicker
                        onChange={onChange}
                        value={value}
                    />

                    <Row>
                        <Button value="Save"/> 
                    </Row>


                    <h3 style={{fontWeight: "bold"}}>E-mail address</h3>
                    <div style={{backgroundColor: "#E0E0E0", height: '2px', width: '100%'}}></div>
                    <Row>
                            <Input caption='E-mail address' width="300px" />
                            <Input caption='Password' width="300px" type="password"/>
                    </Row>
                    <Row>
                        <Button value="Save" />
                    </Row>


                    <h3 style={{fontWeight: "bold"}}>Password</h3>
                    <div style={{backgroundColor: "#E0E0E0", height: '2px', width: '100%'}}></div>
                    <Row>
                        <Input caption='Current password' width="300px" type="password"/>
                        <Input caption='New password' width="300px" type="password"/>
                        <Input caption='Confirm password' width="300px" type="password"/>
                    </Row>
                    <Row>
                        <Button value="Save" />
                    </Row>
                </Col>
            </Panel>
        </div>
    )
}

export default Account;