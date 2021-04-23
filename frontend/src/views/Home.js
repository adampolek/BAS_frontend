import React, {useState} from 'react';
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
import JAMCounter from "../components/JAMCounter";
import JAMChart from "../components/JAMChart";
import API from "../api/API";

let initialData = true;

const Home = (props) => {

    const [additionalInfo, setAdditionalInfo] = useState({});

    const [noData, setNoData] = useState(false);

    const [weight, setWeight] = useState(0);
    const [glucose, setGlucose] = useState(0);
    const [insulin, setInsulin] = useState(0);
    const [bloodPressure, setBloodPressure] = useState(0);

    const [cigarettesAmount, setAmountOfCigarettes] = useState(0);
    const [sleepHours, setHoursOfSleep] = useState(0);
    const [glassesOfWater, setGlassesOfWater] = useState(0);
    const [trainingHours, setTrainingHours] = useState(0.0);
    const [alcoholAmount, setAmountOfAlcohol] = useState(0);

    var labels = ["January", "February", "March", "April", "May", "June", "July"];
    var data = [0, 10, 5, 2, 20, 30, 45];

    const updateAdditionalInfo = async (field) => {
        API.put("bas/additional_info/updateEntry", Object.assign({}, additionalInfo, {
            cigarettesAmount: cigarettesAmount,
            sleepHours: sleepHours,
            glassesOfWater: glassesOfWater,
            trainingHours: trainingHours,
            alcoholAmount: alcoholAmount
        }, field), {headers: {Authorization: JSON.parse(localStorage.getItem('token'))}})
            .then(res => {
                console.log(res);
            })

    }
    if (initialData) {
        API.get("bas/entry/day?entryDate=" + new Date().toISOString().slice(0, 10), {headers: {Authorization: JSON.parse(localStorage.getItem('token'))}})
            .then(res => {
                console.log(res.data)
                setWeight(res.data.weight);
                setGlucose(res.data.glucose);
                setInsulin(res.data.insulin);
                setBloodPressure(res.data.bloodPressure);
                initialData = false;
            })
            .catch(error => {
                setNoData(true);
            })
        API.get("bas/additional_info/day?entryDate=" + new Date().toISOString().slice(0, 10), {headers: {Authorization: JSON.parse(localStorage.getItem('token'))}})
            .then(res => {
                console.log(res.data);
                setAdditionalInfo(res.data);
                setAmountOfCigarettes(res.data.cigarettesAmount);
                setHoursOfSleep(res.data.sleepHours);
                setGlassesOfWater(res.data.glassesOfWater);
                setTrainingHours(res.data.trainingHours);
                setAmountOfAlcohol(res.data.alcoholAmount);
                initialData = false;
            }).catch(error => {
            setNoData(true);
        })
    }

    return (
        <JAMRow style={{marginTop: '70px', marginBottom: '50px'}}>
            <Menubar color='white'/>
            {noData ? (<JAMRow float='left' width='100%'>
                    <JAMPanel width='90%' maxWidth='1300px' minWidth='300px'>
                        <JAMCol float='left' width='100%' style={{margin: '10px'}}>
                            <JAMRow>
                                <JAMLabel center caption='Missing data' header/>
                            </JAMRow>
                            <JAMRow>
                                <JAMLabel center caption='Fill up your daily diagnosis :)' big/>
                            </JAMRow>
                            <JAMRow width='100%' style={{margin: '10px 0px'}}>
                                <JAMButton value='Fill up' width='350px' onClick={() => {document.location.href='/diagnosis'}}/>
                            </JAMRow>
                        </JAMCol>
                    </JAMPanel>
                </JAMRow>)
                :
                (<div>
                    <JAMRow width='100%'>
                        <JAMPanel width='90%' maxWidth='1300px' minWidth='300px' style={{margin: '20px'}}>
                            <JAMCol float='left' width='100%' style={{margin: '10px'}}>
                                <JAMRow>
                                    <JAMLabel center caption='Daily Diagnosis' big bold/>
                                </JAMRow>
                                <JAMRow width='100%'>
                                    <JAMLine width='100%' style={{margin: '10px'}}/>
                                </JAMRow>
                            </JAMCol>
                        </JAMPanel>
                    </JAMRow>
                    <JAMRow>
                        <JAMCol style={{margin: '20px'}}>
                            <JAMPanel height="200px" maxWidth={"1300px"} minWidth='300px'>
                                <JAMCol>
                                    <JAMLabel caption='Weight' big bold style={{marginBottom: '20px'}}/>
                                    <JAMImage icon={weightScale} width='50px' style={{marginBottom: '20px'}}/>
                                    <JAMLabel caption={weight + ' kg'}/>
                                </JAMCol>
                            </JAMPanel>
                        </JAMCol>
                        <JAMCol style={{margin: '20px'}}>
                            <JAMPanel height="200px" maxWidth={"1300px"} minWidth='300px'>
                                <JAMCol>
                                    <JAMLabel caption='Glucose' big bold style={{marginBottom: '20px'}}/>
                                    <JAMImage icon={glucoseMeter} width='50px' style={{marginBottom: '20px'}}/>
                                    <JAMLabel caption={glucose + ' mg/dL'}/>
                                </JAMCol>
                            </JAMPanel>
                        </JAMCol>
                        <JAMCol style={{margin: '20px'}}>
                            <JAMPanel height="200px" maxWidth={"1300px"} minWidth='300px'>
                                <JAMCol>
                                    <JAMLabel caption='Insulin' big bold style={{marginBottom: '20px'}}/>
                                    <JAMImage icon={injection} width='50px' style={{marginBottom: '20px'}}/>
                                    <JAMLabel caption={insulin + ' mU/ml'}/>
                                </JAMCol>
                            </JAMPanel>
                        </JAMCol>
                        <JAMCol style={{margin: '20px'}}>
                            <JAMPanel height="200px" maxWidth={"1300px"} minWidth='300px'>
                                <JAMCol>
                                    <JAMLabel caption='Blood Pressure' big bold style={{marginBottom: '20px'}}/>
                                    <JAMImage icon={bloodPressureImage} width='50px' style={{marginBottom: '20px'}}/>
                                    <JAMLabel caption={bloodPressure + ' mm/Hg'}/>
                                </JAMCol>
                            </JAMPanel>
                        </JAMCol>
                    </JAMRow>
                    <JAMRow>
                        <JAMCol style={{margin: '20px'}}>
                            <JAMPanel height="200px" maxWidth={"1300px"} minWidth='300px'>
                                <JAMCol>
                                    <JAMLabel caption='Amount of cigarettes' big bold style={{marginBottom: '20px'}}/>
                                    <JAMImage icon={cigarette} width='50px' style={{marginBottom: '20px'}}/>
                                    <JAMCounter unit=' szt.' value={cigarettesAmount} caption=''
                                                onClick={(e) => {
                                                    setAmountOfCigarettes(e);
                                                    updateAdditionalInfo({cigarettesAmount: e});
                                                }}/>
                                </JAMCol>
                            </JAMPanel>
                        </JAMCol>
                        <JAMCol style={{margin: '20px'}}>
                            <JAMPanel height="200px" maxWidth={"1300px"} minWidth='300px'>
                                <JAMCol>
                                    <JAMLabel caption='Hours of sleep' big bold style={{marginBottom: '20px'}}/>
                                    <JAMImage icon={bed} width='50px' style={{marginBottom: '20px'}}/>
                                    <JAMCounter unit=' h' steps={0.5} value={sleepHours} caption=''
                                                onClick={(e) => {
                                                    setHoursOfSleep(e);
                                                    updateAdditionalInfo({sleepHours: e});
                                                }}/>
                                </JAMCol>
                            </JAMPanel>
                        </JAMCol>
                        <JAMCol style={{margin: '20px'}}>
                            <JAMPanel height="200px" maxWidth={"1300px"} minWidth='300px'>
                                <JAMCol>
                                    <JAMLabel caption='Glasses of water' big bold style={{marginBottom: '20px'}}/>
                                    <JAMImage icon={water} width='50px' style={{marginBottom: '20px'}}/>
                                    <JAMCounter value={glassesOfWater} caption=''
                                                onClick={(e) => {
                                                    setGlassesOfWater(e);
                                                    updateAdditionalInfo({glassesOfWater: e});
                                                }}/>
                                </JAMCol>
                            </JAMPanel>
                        </JAMCol>
                        <JAMCol style={{margin: '20px'}}>
                            <JAMPanel height="200px" maxWidth={"1300px"} minWidth='300px'>
                                <JAMCol>
                                    <JAMLabel caption='Training hours' big bold style={{marginBottom: '20px'}}/>
                                    <JAMImage icon={dumbbells} width='50px' style={{marginBottom: '20px'}}/>
                                    <JAMCounter unit=' h' steps={0.25} value={trainingHours} caption=''
                                                onClick={(e) => {
                                                    setTrainingHours(e);
                                                    updateAdditionalInfo({trainingHours: e});
                                                }}/>
                                </JAMCol>
                            </JAMPanel>
                        </JAMCol>
                        <JAMCol style={{margin: '20px'}}>
                            <JAMPanel height="200px" maxWidth={"1300px"} minWidth='300px'>
                                <JAMCol>
                                    <JAMLabel caption='Amount of alcohol' big bold style={{marginBottom: '20px'}}/>
                                    <JAMImage icon={beer} width='50px' style={{marginBottom: '20px'}}/>
                                    <JAMCounter value={alcoholAmount} caption=''
                                                onClick={(e) => {
                                                    setAmountOfAlcohol(e);
                                                    updateAdditionalInfo({alcoholAmount: e});
                                                }}/>
                                </JAMCol>
                            </JAMPanel>
                        </JAMCol>
                    </JAMRow>
                </div>)
            }

            <JAMChart labels={labels} data={data} />


            {/* <JAMRow width='100%'>
               <JAMPanel width='90%' maxWidth='1300px' minWidth='300px' style={{margin: '20px'}}>
                   <JAMChart labels={labels} data={data}/>
               </JAMPanel>
            </JAMRow>
            <JAMRow width='90%' style={{maxWidth: '1300px', minWidth: '300px'}}>
               <JAMCol width='30%' style={{maxWidth: '1300px', minWidth: '300px', margin: '10px'}}>
                   <JAMPanel width='100%' maxWidth={"1300px"}>
                       <JAMChart labels={labels} data={data}/>
                   </JAMPanel>
               </JAMCol>
               <JAMCol width='30%' style={{maxWidth: '1300px', minWidth: '300px', margin: '10px'}}>
                   <JAMPanel width='100%' maxWidth={"1300px"}>
                       <JAMChart type='bar' backgroundColor='purple' labels={labels} data={data}/>
                   </JAMPanel>
               </JAMCol>
               <JAMCol width='30%' style={{maxWidth: '1300px', minWidth: '300px', margin: '10px'}}>
                   <JAMPanel width='100%' maxWidth={"1300px"}>
                       <JAMChart labels={labels} data={data}/>
                   </JAMPanel>
               </JAMCol>
            </JAMRow> */}
        </JAMRow>
    )
}

export default Home;