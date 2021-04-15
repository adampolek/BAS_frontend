import React from 'react';
import JAMCol from '../components/JAMCol';
import JAMInput from '../components/JAMInput';
import JAMLabel from '../components/JAMLabel';
import JAMLine from '../components/JAMLine';
import JAMPanel from '../components/JAMPanel';
import Menubar from './Menubar';

const DailyDiagnosis = (props) => {
    return (
        <div style={{ height: "100%", width: "100%", position: "absolute", backgroundColor: "purple" }}>
            <JAMPanel width={"100%"} height={"100%"}>
                <Menubar />
                <JAMCol>
                    <JAMLabel caption='Fill up your daily diagnosis' header/>
                    <JAMLine style={{marginTop:'20px', marginBottom: '20px'}} />
                    <JAMInput type='number' caption='Weight' />
                    <JAMInput type='number' caption='Glucose' />
                    <JAMInput type='number' caption='Insulin' />
                    <JAMInput type='number' caption='Blood Pressure' />
                </JAMCol>
            </JAMPanel>
        </div>
    )
}

export default DailyDiagnosis;