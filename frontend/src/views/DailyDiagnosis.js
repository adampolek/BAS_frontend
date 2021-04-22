import React, { useState } from 'react';
import JAMCol from '../components/JAMCol';
import JAMInput from '../components/JAMInput';
import JAMLabel from '../components/JAMLabel';
import JAMLine from '../components/JAMLine';
import JAMPanel from '../components/JAMPanel';
import Menubar from './Menubar';
import API from "../api/API";
import JAMButton from "../components/JAMButton";
import JAMCounter from '../components/JAMCounter';
import JAMImage from '../components/JAMImage';
import JAMRow from '../components/JAMRow';
import cigarette from '../resources/cigarette.svg'
import bed from '../resources/sleep.svg'
import dumbbells from '../resources/dumbbells.svg'
import beer from '../resources/beer.svg'
import water from '../resources/water.svg'
import bloodPressureImage from '../resources/blood-pressure.svg'
import glucoseMeter from '../resources/glucose-meter.svg'
import weightScale from '../resources/weight-scale.svg'
import injection from '../resources/injection.svg'

const DailyDiagnosis = (props) => {

    const [weight, setWeight] = useState("0");
    const [glucose, setGlucose] = useState("0");
    const [insulin, setInsulin] = useState("0");
    const [bloodPressure, setBloodPressure] = useState("0");
    const [amountOfCigarettes, setAmountOfCigarettes] = useState(0);
    const [hoursOfSleep, setHoursOfSleep] = useState(0);
    const [glassesOfWater, setGlassesOfWater] = useState(0);
    const [trainingHours, setTrainingHours] = useState(0);
    const [amountOfAlcohol, setAmountOfAlcohol] = useState(0);

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
                    <JAMRow>
                        <JAMImage icon={weightScale} width='50px' />
                        <JAMInput type='number' caption='Weight' value={weight}
                            onChange={(e) => setWeight(e.target.value)} />
                    </JAMRow>
                    <JAMRow>
                        <JAMImage icon={glucoseMeter} width='50px' />
                        <JAMInput type='number' caption='Glucose' value={glucose}
                            onChange={(e) => setGlucose(e.target.value)} />
                    </JAMRow>
                    <JAMRow>
                        <JAMImage icon={injection} width='50px' />
                        <JAMInput type='number' caption='Insulin' value={insulin}
                            onChange={(e) => setInsulin(e.target.value)} />
                    </JAMRow>
                    <JAMRow>
                        <JAMImage icon={bloodPressureImage} width='50px' />
                        <JAMInput type='number' caption='Blood Pressure' value={bloodPressure}
                            onChange={(e) => setBloodPressure(e.target.value)} />
                    </JAMRow>
                    <JAMButton value='Add entry' style={{ marginTop: '40px' }} width={"100%"} onClick={() => addEntry()} />
                    <JAMLabel caption='Additional information' big style={{ marginTop: '20px' }} />
                    <JAMLine style={{ marginTop: '20px', marginBottom: '20px' }} />
                    {/* ŻY ŻY Update this data below on every click :) TODO*/}
                    <JAMRow>
                        <JAMImage icon={cigarette} width='50px' />
                        <JAMCounter value={amountOfCigarettes} caption='Amount of cigarettes' onClick={(e) => setAmountOfCigarettes(e)} />
                    </JAMRow>
                    <JAMRow>
                        <JAMImage icon={bed} width='50px' />
                        <JAMCounter value={hoursOfSleep} caption='Hours of sleep' onClick={(e) => setHoursOfSleep(e)} />
                    </JAMRow>
                    <JAMRow>
                        <JAMImage icon={water} width='50px' />
                        <JAMCounter value={glassesOfWater} caption='Glasses of water' onClick={(e) => setGlassesOfWater(e)} />
                    </JAMRow>
                    <JAMRow>
                        <JAMImage icon={dumbbells} width='50px' />
                        <JAMCounter value={trainingHours} caption='Training hours' onClick={(e) => setTrainingHours(e)} />
                    </JAMRow>
                    <JAMRow>
                        <JAMImage icon={beer} width='50px' />
                        <JAMCounter value={amountOfAlcohol} caption='Amount of alcohol' onClick={(e) => setAmountOfAlcohol(e)} />
                    </JAMRow>
                </JAMCol>
            </JAMPanel>
        </div>
    )
}

export default DailyDiagnosis;