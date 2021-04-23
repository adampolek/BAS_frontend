import React, { useState } from 'react';
import JAMCol from '../components/JAMCol';
import JAMPanel from '../components/JAMPanel';
import JAMRow from '../components/JAMRow';
import Menubar from './Menubar';
import cigarette from '../resources/cigarette.svg'
import bed from '../resources/sleep.svg'
import dumbbells from '../resources/dumbbells.svg'
import beer from '../resources/beer.svg'
import water from '../resources/water.svg'
import bloodPressureImage from '../resources/blood-pressure.svg'
import glucoseMeter from '../resources/glucose-meter.svg'
import weightScale from '../resources/weight-scale.svg'
import injection from '../resources/injection.svg'
import JAMImage from '../components/JAMImage';
import JAMLabel from '../components/JAMLabel';
import JAMButton from '../components/JAMButton';
import JAMLine from '../components/JAMLine';
import JAMCounter from '../components/JAMCounter';
import JAMChart from '../components/JAMChart';

const Home = (props) => {

    const [amountOfCigarettes, setAmountOfCigarettes] = useState(0);
    const [hoursOfSleep, setHoursOfSleep] = useState(0);
    const [glassesOfWater, setGlassesOfWater] = useState(0);
    const [trainingHours, setTrainingHours] = useState(0.0);
    const [amountOfAlcohol, setAmountOfAlcohol] = useState(0);

    var labels = ["January", "February", "March", "April", "May", "June", "July"];
    var data = [0, 10, 5, 2, 20, 30, 45];
    return (
        <JAMRow style={{ marginTop: '70px', marginBottom: '50px' }}>
            <Menubar color='white' />
            <JAMRow float='left' width='100%'>
                <JAMPanel width='90%' maxWidth='1300px' minWidth='300px'>
                    <JAMCol float='left' width='100%' style={{ margin: '10px' }}>
                        <JAMRow>
                            <JAMLabel center caption='Title zeby uzupelnil dane' header />
                        </JAMRow>
                        <JAMRow>
                            <JAMLabel center caption='Message zeby uzupelnil dane' big />
                        </JAMRow>
                        <JAMRow width='100%' style={{ margin: '10px 0px' }}>
                            <JAMButton caption='Add entry' width='350px' />
                        </JAMRow>
                    </JAMCol>
                </JAMPanel>
            </JAMRow>
            <JAMRow width='100%'>
                <JAMPanel width='90%' maxWidth='1300px' minWidth='300px' style={{ margin: '20px' }}>
                    <JAMCol float='left' width='100%' style={{ margin: '10px' }}>
                        <JAMRow>
                            <JAMLabel center caption='Daily Diagnosis' big bold />
                        </JAMRow>
                        <JAMRow width='100%'>
                            <JAMLine width='100%' style={{ margin: '10px' }} />
                        </JAMRow>
                    </JAMCol>
                </JAMPanel>
            </JAMRow>
            <JAMRow>
                <JAMCol style={{ margin: '20px' }}>
                    <JAMPanel height="200px" maxWidth={"1300px"} minWidth='300px'>
                        <JAMCol>
                            <JAMLabel caption='Weight' big bold style={{ marginBottom: '20px' }} />
                            <JAMImage icon={weightScale} width='50px' style={{ marginBottom: '20px' }} />
                            <JAMLabel caption='waga kg' />
                        </JAMCol>
                    </JAMPanel>
                </JAMCol>
                <JAMCol style={{ margin: '20px' }}>
                    <JAMPanel height="200px" maxWidth={"1300px"} minWidth='300px'>
                        <JAMCol>
                            <JAMLabel caption='Glucose' big bold style={{ marginBottom: '20px' }} />
                            <JAMImage icon={glucoseMeter} width='50px' style={{ marginBottom: '20px' }} />
                            <JAMLabel caption='dfg' />
                        </JAMCol>
                    </JAMPanel>
                </JAMCol>
                <JAMCol style={{ margin: '20px' }}>
                    <JAMPanel height="200px" maxWidth={"1300px"} minWidth='300px'>
                        <JAMCol>
                            <JAMLabel caption='Insulin' big bold style={{ marginBottom: '20px' }} />
                            <JAMImage icon={injection} width='50px' style={{ marginBottom: '20px' }} />
                            <JAMLabel caption='dfg' />
                        </JAMCol>
                    </JAMPanel>
                </JAMCol>
                <JAMCol style={{ margin: '20px' }}>
                    <JAMPanel height="200px" maxWidth={"1300px"} minWidth='300px'>
                        <JAMCol>
                            <JAMLabel caption='Blood Pressure' big bold style={{ marginBottom: '20px' }} />
                            <JAMImage icon={bloodPressureImage} width='50px' style={{ marginBottom: '20px' }} />
                            <JAMLabel caption='dfg' />
                        </JAMCol>
                    </JAMPanel>
                </JAMCol>
            </JAMRow>
            <JAMRow>
                <JAMCol style={{ margin: '20px' }}>
                    <JAMPanel height="200px" maxWidth={"1300px"} minWidth='300px'>
                        <JAMCol>
                            <JAMLabel caption='Amount of cigarettes' big bold style={{ marginBottom: '20px' }} />
                            <JAMImage icon={cigarette} width='50px' style={{ marginBottom: '20px' }} />
                            <JAMCounter unit=' szt.' value={amountOfCigarettes} caption='' onClick={(e) => setAmountOfCigarettes(e)} />
                        </JAMCol>
                    </JAMPanel>
                </JAMCol>
                <JAMCol style={{ margin: '20px' }}>
                    <JAMPanel height="200px" maxWidth={"1300px"} minWidth='300px'>
                        <JAMCol>
                            <JAMLabel caption='Hours of sleep' big bold style={{ marginBottom: '20px' }} />
                            <JAMImage icon={bed} width='50px' style={{ marginBottom: '20px' }} />
                            <JAMCounter unit=' h' steps={0.5} value={hoursOfSleep} caption='' onClick={(e) => setHoursOfSleep(e)} />
                        </JAMCol>
                    </JAMPanel>
                </JAMCol>
                <JAMCol style={{ margin: '20px' }}>
                    <JAMPanel height="200px" maxWidth={"1300px"} minWidth='300px'>
                        <JAMCol>
                            <JAMLabel caption='Glasses of water' big bold style={{ marginBottom: '20px' }} />
                            <JAMImage icon={water} width='50px' style={{ marginBottom: '20px' }} />
                            <JAMCounter value={glassesOfWater} caption='' onClick={(e) => setGlassesOfWater(e)} />
                        </JAMCol>
                    </JAMPanel>
                </JAMCol>
                <JAMCol style={{ margin: '20px' }}>
                    <JAMPanel height="200px" maxWidth={"1300px"} minWidth='300px'>
                        <JAMCol>
                            <JAMLabel caption='Training hours' big bold style={{ marginBottom: '20px' }} />
                            <JAMImage icon={dumbbells} width='50px' style={{ marginBottom: '20px' }} />
                            <JAMCounter unit=' h' steps={0.25} value={trainingHours} caption='' onClick={(e) => setTrainingHours(e)} />
                        </JAMCol>
                    </JAMPanel>
                </JAMCol>
                <JAMCol style={{ margin: '20px' }}>
                    <JAMPanel height="200px" maxWidth={"1300px"} minWidth='300px'>
                        <JAMCol>
                            <JAMLabel caption='Amount of alcohol' big bold style={{ marginBottom: '20px' }} />
                            <JAMImage icon={beer} width='50px' style={{ marginBottom: '20px' }} />
                            <JAMCounter value={amountOfAlcohol} caption='' onClick={(e) => setAmountOfAlcohol(e)} />
                        </JAMCol>
                    </JAMPanel>
                </JAMCol>
            </JAMRow>
            <JAMRow width='100%'>
                <JAMPanel width='90%' maxWidth='1300px' minWidth='300px' style={{ margin: '20px' }}>
                    <JAMChart labels={labels} data={data} />
                </JAMPanel>
            </JAMRow>
            <JAMRow width='90%' style={{maxWidth: '1300px', minWidth: '300px'}}>
                <JAMCol width='30%' style={{maxWidth: '1300px', minWidth: '300px', margin: '10px'}}>
                    <JAMPanel width='100%' maxWidth={"1300px"} >
                        <JAMChart labels={labels} data={data} />
                    </JAMPanel>
                </JAMCol>
                <JAMCol width='30%' style={{maxWidth: '1300px', minWidth: '300px', margin: '10px'}}>
                    <JAMPanel width='100%' maxWidth={"1300px"} >
                        <JAMChart type='bar' backgroundColor='purple' labels={labels} data={data} />
                    </JAMPanel>
                </JAMCol>
                <JAMCol width='30%' style={{maxWidth: '1300px', minWidth: '300px', margin: '10px'}}>
                    <JAMPanel width='100%' maxWidth={"1300px"} >
                        <JAMChart labels={labels} data={data} />
                    </JAMPanel>
                </JAMCol>
            </JAMRow>
        </JAMRow>
    )
}

export default Home;