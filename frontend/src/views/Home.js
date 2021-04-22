import React from 'react';
import JAMCol from '../components/JAMCol';
import JAMPanel from '../components/JAMPanel';
import JAMRow from '../components/JAMRow';
import Menubar from './Menubar';
import { Line } from 'react-chartjs-2';
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

const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
        {
            label: 'Weight',
            backgroundColor: 'purple',
            borderColor: 'pink',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'blue',
            pointBackgroundColor: 'blue',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            // pointHoverBackgroundColor: '',
            // pointHoverBorderColor: '',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 67, 68, 67, 69, 70, 74]
        }
    ]
};

const Home = (props) => {

    return (
        <JAMRow>
            <Menubar color='white' />
            <JAMRow float='left' width='100%' style={{ marginTop: '70px' }}>
                <JAMPanel width='90%' maxWidth='1300px' minWidth='300px'>
                    <JAMCol float='left' width='100%' style={{margin: '10px'}}>
                        <JAMRow>
                    <JAMLabel center caption='Title zeby uzupelnil dane' header />
                        </JAMRow>
                        <JAMRow>
                    <JAMLabel center caption='Message zeby uzupelnil dane' big />
                        </JAMRow>
                        <JAMRow width='100%' style={{margin: '10px'}}>
                            <JAMButton caption='Add entry' width='350px' />
                        </JAMRow>
                    </JAMCol>
                </JAMPanel>
            </JAMRow>
            <JAMRow style={{ marginTop: '70px' }}>
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
                            <JAMLabel caption='dfg' />
                        </JAMCol>
                    </JAMPanel>
                </JAMCol>
                <JAMCol style={{ margin: '20px' }}>
                    <JAMPanel height="200px" maxWidth={"1300px"} minWidth='300px'>
                        <JAMCol>
                            <JAMLabel caption='Hours of sleep' big bold style={{ marginBottom: '20px' }} />
                            <JAMImage icon={bed} width='50px' style={{ marginBottom: '20px' }} />
                            <JAMLabel caption='dfg' />
                        </JAMCol>
                    </JAMPanel>
                </JAMCol>
                <JAMCol style={{ margin: '20px' }}>
                    <JAMPanel height="200px" maxWidth={"1300px"} minWidth='300px'>
                        <JAMCol>
                            <JAMLabel caption='Glasses of water' big bold style={{ marginBottom: '20px' }} />
                            <JAMImage icon={water} width='50px' style={{ marginBottom: '20px' }} />
                            <JAMLabel caption='dfg' />
                        </JAMCol>
                    </JAMPanel>
                </JAMCol>
                <JAMCol style={{ margin: '20px' }}>
                    <JAMPanel height="200px" maxWidth={"1300px"} minWidth='300px'>
                        <JAMCol>
                            <JAMLabel caption='Training hours' big bold style={{ marginBottom: '20px' }} />
                            <JAMImage icon={dumbbells} width='50px' style={{ marginBottom: '20px' }} />
                            <JAMLabel caption='dfg' />
                        </JAMCol>
                    </JAMPanel>
                </JAMCol>
                <JAMCol style={{ margin: '20px' }}>
                    <JAMPanel height="200px" maxWidth={"1300px"} minWidth='300px'>
                        <JAMCol>
                            <JAMLabel caption='Amount of alcohol' big bold style={{ marginBottom: '20px' }} />
                            <JAMImage icon={beer} width='50px' style={{ marginBottom: '20px' }} />
                            <JAMLabel caption='dfg' />
                        </JAMCol>
                    </JAMPanel>
                </JAMCol>
            </JAMRow>
        </JAMRow>
    )
}

export default Home;