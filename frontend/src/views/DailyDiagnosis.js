import React, { useState } from 'react';
import JAMCol from '../components/JAMCol';
import JAMInput from '../components/JAMInput';
import JAMLabel from '../components/JAMLabel';
import JAMLine from '../components/JAMLine';
import JAMPanel from '../components/JAMPanel';
import Menubar from './Menubar';
import API from "../api/API";
import JAMButton from "../components/JAMButton";

const DailyDiagnosis = (props) => {

    const [weight, setWeight] = useState("0");
    const [glucose, setGlucose] = useState("0");
    const [insulin, setInsulin] = useState("0");
    const [bloodPressure, setBloodPressure] = useState("0");

    const addEntry = async () => {
        API.post('bas/entry/save', {
            weight: parseFloat(weight),
            glucose: parseInt(glucose),
            insulin: parseInt(insulin),
            bloodPressure: parseInt(bloodPressure),
            entryDate: new Date()
        }, { headers: { Authorization: JSON.parse(localStorage.getItem('token')) } }).then(res => {
            console.log(res);
        })
    };

    return (
        <div style={{ height: "100%", width: "100%", position: "absolute", backgroundColor: "purple" }}>
            <JAMPanel width={"100%"} height={"100%"}>
                <Menubar />
                <JAMCol>
                    <JAMLabel caption='Fill up your daily diagnosis' header />
                    <JAMLine style={{ marginTop: '20px', marginBottom: '20px' }} />
                    <JAMInput type='number' caption='Weight' value={weight}
                        onChange={(e) => setWeight(e.target.value)} />
                    <JAMInput type='number' caption='Glucose' value={glucose}
                        onChange={(e) => setGlucose(e.target.value)} />
                    <JAMInput type='number' caption='Insulin' value={insulin}
                        onChange={(e) => setInsulin(e.target.value)} />
                    <JAMInput type='number' caption='Blood Pressure' value={bloodPressure}
                        onChange={(e) => setBloodPressure(e.target.value)} />
                    <JAMLabel caption='Additional information' big style={{ marginTop: '20px' }} />
                    <JAMLine style={{ marginTop: '20px', marginBottom: '20px' }} />
                    <JAMInput type='number' caption='Amount of cigarettes' />
                    <JAMInput type='number' caption='Hours of sleep' />
                    <JAMInput type='number' caption='Glasses of water' />
                    <JAMInput type='number' caption='Training hours' />
                    <JAMInput type='number' caption='Amount of alcohol' />
                    <JAMButton value='Add entry' width={"100%"} onClick={() => addEntry()} />
                </JAMCol>
            </JAMPanel>
        </div>
    )
}

export default DailyDiagnosis;