import React, { useState } from 'react';
import JAMCol from '../components/JAMCol';
import JAMInput from '../components/JAMInput';
import JAMLabel from '../components/JAMLabel';
import JAMLine from '../components/JAMLine';
import JAMPanel from '../components/JAMPanel';
import Menubar from './Menubar';
import API from "../api/API";
import JAMButton from "../components/JAMButton";
import JAMImage from '../components/JAMImage';
import JAMRow from '../components/JAMRow';
import bloodPressureImage from '../resources/blood-pressure.svg'
import glucoseMeter from '../resources/glucose-meter.svg'
import weightScale from '../resources/weight-scale.svg'
import injection from '../resources/injection.svg'
import JAMLoader from '../components/JAMLoader';

const DailyDiagnosis = (props) => {

    const [weight, setWeight] = useState("0");
    const [glucose, setGlucose] = useState("0");
    const [insulin, setInsulin] = useState("0");
    const [bloodPressure, setBloodPressure] = useState("0");
    const [isLoaderShown, setIsLoaderShown] = useState(false);

    const addEntry = async () => {
        setIsLoaderShown(true);
        API.post('bas/entry/save', {
            weight: parseFloat(weight),
            glucose: parseInt(glucose),
            insulin: parseInt(insulin),
            bloodPressure: parseInt(bloodPressure),
            entryDate: new Date()
        }, { headers: { Authorization: JSON.parse(localStorage.getItem('token')) } }).then(res => {
            setIsLoaderShown(false);
            document.location.href = '/'
        })
    };

    return (
        <JAMPanel width={"90%"} maxWidth={"1300px"} backgroundColor={"white"} minWidth='400px' style={{ marginTop: '70px', marginBottom: '50px', paddingBottom: '50px', paddingTop: '50px' }}>
            <Menubar color='white' />
            <JAMCol>
                <JAMLabel caption='Fill up your daily diagnosis' header />
                <JAMLine style={{ marginTop: '20px', marginBottom: '20px' }} />
                <JAMRow>
                    <JAMImage icon={weightScale} width='50px' />
                    <JAMInput width='200px' type='number' caption='Weight' value={weight}
                        onChange={(e) => setWeight(e.target.value)} />
                </JAMRow>
                <JAMRow>
                    <JAMImage icon={glucoseMeter} width='50px' />
                    <JAMInput width='200px' type='number' caption='Glucose' value={glucose}
                        onChange={(e) => setGlucose(e.target.value)} />
                </JAMRow>
                <JAMRow>
                    <JAMImage icon={injection} width='50px' />
                    <JAMInput width='200px' type='number' caption='Insulin' value={insulin}
                        onChange={(e) => setInsulin(e.target.value)} />
                </JAMRow>
                <JAMRow>
                    <JAMImage icon={bloodPressureImage} width='50px' />
                    <JAMInput width='200px' type='number' caption='Blood Pressure' value={bloodPressure}
                        onChange={(e) => setBloodPressure(e.target.value)} />
                </JAMRow>
                <JAMButton value='Save entry' style={{ marginTop: '40px' }} width={"350px"} onClick={() => addEntry()} />
                <JAMRow style={{margin:'10px'}}>
                    <JAMLoader show={isLoaderShown} />
                </JAMRow>
            </JAMCol>
        </JAMPanel>
    )
}

export default DailyDiagnosis;