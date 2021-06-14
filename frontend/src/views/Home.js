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
import badStatus from '../resources/bad_status.svg'
import goodStatus from '../resources/good_status.svg'
import JAMImage from '../components/JAMImage';
import JAMLabel from '../components/JAMLabel';
import JAMButton from '../components/JAMButton';
import JAMLine from '../components/JAMLine';
import JAMCounter from "../components/JAMCounter";
import JAMChart from "../components/JAMChart";
import API from "../api/API";
import JAMInfo from '../components/JAMInfo';

let initialData = true;

const Home = (props) => {

    const [additionalInfo, setAdditionalInfo] = useState({});
    const [additionalInfoStats, setAdditionalInfoStats] = useState('');

    const [noData, setNoData] = useState(true);

    const [weight, setWeight] = useState(0);
    const [glucose, setGlucose] = useState(0);
    const [insulin, setInsulin] = useState(0);
    const [bloodPressure, setBloodPressure] = useState(0);
    const [healthy, setHealthy] = useState(null);

    const [cigarettesAmount, setAmountOfCigarettes] = useState(0);
    const [sleepHours, setHoursOfSleep] = useState(0);
    const [glassesOfWater, setGlassesOfWater] = useState(0);
    const [trainingHours, setTrainingHours] = useState(0.0);
    const [alcoholAmount, setAmountOfAlcohol] = useState(0);

    const [labelsWeight, setLabels] = useState([]);
    const [weightData, setWeightData] = useState([]);

    const [glucoseData, setGlucoseData] = useState([]);

    const [insulinData, setInsulinData] = useState([]);

    const [bloodPressureData, setBloodPressureData] = useState([]);

    const [statisticDays, setStatisticDays] = useState(7);

    var date = new Date();
    date.setDate(date.getDate() - statisticDays + 1);
    const [startDate, setStartDate] = useState(date.toISOString().slice(0, 10));
    const [stopDate, setStopDate] = useState(new Date().toISOString().slice(0, 10));


    const changeDate = (next) => {
        var statisticDate = new Date(Date.parse(stopDate));
        var todayDate = new Date();
        todayDate.setHours(0, 0, 0, 0)
        if (next && stopDate !== new Date().toISOString().slice(0, 10)) {
            statisticDate.setDate(statisticDate.getDate() + statisticDays);
            if (statisticDate > todayDate) {
                statisticDate = new Date();
            }
        } else if (!next) {
            statisticDate.setDate(statisticDate.getDate() - statisticDays);
        }
        setStopDate(statisticDate.toISOString().slice(0, 10));
        var startDateCopy = new Date(statisticDate);
        startDateCopy.setDate(startDateCopy.getDate() - statisticDays + 1);
        setStartDate(startDateCopy.toISOString().slice(0, 10));
        updateStatistics(startDateCopy.toISOString().slice(0, 10), statisticDate.toISOString().slice(0, 10), statisticDays)
    };

    const updateStatistics = async (statisticStartDate, statisticStopDate, amountDays) => {
        API.get("bas/entry/days?start=" + statisticStartDate + "&stop=" + statisticStopDate, {headers: {Authorization: JSON.parse(localStorage.getItem('token'))}}).then(res => {
            const weights = [];
            const glucoses = [];
            const insulins = [];
            const bloodPressures = [];
            const labelsData = [];
            var currentDate = res.data[res.data.length - 1].entryDate;
            currentDate = currentDate.slice(0, currentDate.length - 3);
            const sizeEntry = res.data.length;
            var meanWeights = 0;
            var meanGlucoses = 0;
            var meanInsulins = 0;
            var meanBloodPressures = 0;
            var counter = 0;

            for (var i = sizeEntry - 1; i >= 0; i--) {
                if (amountDays === 365) {
                    if (currentDate === res.data[i].entryDate.slice(0, res.data[i].entryDate.length - 3)) {
                        meanWeights += res.data[i].weight;
                        meanGlucoses += res.data[i].glucose;
                        meanInsulins += res.data[i].insulin;
                        meanBloodPressures += res.data[i].bloodPressure;
                        counter += 1;
                    } else {
                        labelsData.push(currentDate);
                        weights.push(meanWeights / counter);
                        glucoses.push(meanGlucoses / counter);
                        insulins.push(meanInsulins / counter);
                        bloodPressures.push(meanBloodPressures / counter);

                        currentDate = res.data[i].entryDate;
                        currentDate = currentDate.slice(0, currentDate.length - 3);

                        meanWeights = res.data[i].weight;
                        meanGlucoses = res.data[i].glucose;
                        meanInsulins = res.data[i].insulin;
                        meanBloodPressures = res.data[i].bloodPressure;
                        counter = 1;
                    }
                } else {
                    labelsData.push(res.data[i].entryDate);
                    weights.push(res.data[i].weight);
                    glucoses.push(res.data[i].glucose);
                    insulins.push(res.data[i].insulin);
                    bloodPressures.push(res.data[i].bloodPressure);
                }
            }
            if (amountDays === 365) {
                labelsData.push(currentDate);
                weights.push(meanWeights / counter);
                glucoses.push(meanGlucoses / counter);
                insulins.push(meanInsulins / counter);
                bloodPressures.push(meanBloodPressures / counter);
            }
            setLabels(labelsData);
            setWeightData(weights);
            setGlucoseData(glucoses);
            setInsulinData(insulins);
            setBloodPressureData(bloodPressures);
        }).catch(() => {
            setLabels([]);
            setWeightData([]);
            setGlucoseData([]);
            setInsulinData([]);
            setBloodPressureData([]);
        });
    }

    const updateAdditionalInfo = async (field) => {
        API.put("bas/additional_info/updateEntry", Object.assign({}, additionalInfo, {
            cigarettesAmount: cigarettesAmount,
            sleepHours: sleepHours,
            glassesOfWater: glassesOfWater,
            trainingHours: trainingHours,
            alcoholAmount: alcoholAmount
        }, field), {headers: {Authorization: JSON.parse(localStorage.getItem('token'))}})

    }

    const initialDataRequest = () => {
        API.get("bas/entry/day?entryDate=" + new Date().toISOString().slice(0, 10), {headers: {Authorization: JSON.parse(localStorage.getItem('token'))}})
            .then(res => {
                setHealthy(res.data.healthy);
                setWeight(res.data.weight);
                setGlucose(res.data.glucose);
                setInsulin(res.data.insulin);
                setBloodPressure(res.data.bloodPressure);
                initialData = false;
            })
            .catch(error => {
                setNoData(true);
                initialData = false;
            });
        API.get("bas/additional_info/day?entryDate=" + new Date().toISOString().slice(0, 10), {headers: {Authorization: JSON.parse(localStorage.getItem('token'))}})
            .then(res => {
                setAdditionalInfo(res.data);
                setAmountOfCigarettes(res.data.cigarettesAmount);
                setHoursOfSleep(res.data.sleepHours);
                setGlassesOfWater(res.data.glassesOfWater);
                setTrainingHours(res.data.trainingHours);
                setAmountOfAlcohol(res.data.alcoholAmount);
                initialData = false;
            }).catch(error => {
            initialData = false;
        });
        API.get("bas/additional_info/additional_info_stats", {headers: {Authorization: JSON.parse(localStorage.getItem('token'))}})
            .then(res => {
                setAdditionalInfoStats(res.data);
                initialData = false;
            }).catch(error => {
            initialData = false;
        });
    };


    if (initialData) {
        API.get("bas/entry/isEntry?entryDate=" + new Date().toISOString().slice(0, 10), {headers: {Authorization: JSON.parse(localStorage.getItem('token'))}})
            .then(res => {
                setNoData(!res.data);
                initialData = false;
                if (res.data) {
                    initialDataRequest();
                }
            });
        updateStatistics(startDate, stopDate, statisticDays);
    }

    const changeDateRange = (daysNumber) => {
        var tempStopDate = new Date().toISOString().slice(0, 10);
        var tempStartDate = new Date();
        tempStartDate.setDate(tempStartDate.getDate() - daysNumber + 1);
        setStopDate(tempStopDate);
        setStartDate(tempStartDate.toISOString().slice(0, 10));
        setStatisticDays(daysNumber);
        updateStatistics(tempStartDate.toISOString().slice(0, 10), tempStopDate, daysNumber);
    };

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
                                <JAMButton value='Fill up' width='350px' onClick={() => {
                                    document.location.href = '/diagnosis'
                                }}/>
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
                                    {healthy !== null ?
                                        (healthy === true ? (
                                            (<JAMCol>
                                                <JAMImage icon={goodStatus} width='200px'/>
                                                <JAMLabel caption="Your results are within standards"
                                                          color='lightGreen'/>
                                            </JAMCol>)

                                        ) : (<JAMCol>
                                            <JAMImage icon={badStatus} width='200px'/>
                                            <JAMLabel
                                                caption="Your results are suggesting that you might be sick. You should consult with the doctor"
                                                color='red'/>
                                        </JAMCol>)) : ("")}
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
                                    <JAMRow width='100%'>
                                        <JAMCol>
                                            <JAMLabel caption='Amount of cigarettes' big bold/>
                                        </JAMCol>
                                        <JAMCol>
                                            {additionalInfoStats === '' ? (<JAMInfo/>) : (<JAMInfo
                                                message={"Weekly cigarettes: " + additionalInfoStats['cigarettes']['weekly'] +
                                                "\nMonthly cigarettes: " + additionalInfoStats['cigarettes']['monthly'] +
                                                "\nYearly cigarettes: " + additionalInfoStats['cigarettes']['yearly']}/>)}
                                        </JAMCol>
                                    </JAMRow>
                                    <JAMImage icon={cigarette} width='50px' style={{marginTop: '20px'}}/>
                                    <JAMCounter value={cigarettesAmount} caption=''
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
                                    <JAMRow width='100%'>
                                        <JAMCol>
                                            <JAMLabel caption='Hours of sleep' big bold/>
                                        </JAMCol>
                                        <JAMCol>
                                            {additionalInfoStats === '' ? (<JAMInfo/>) : (<JAMInfo
                                                message={"Weekly hours of sleep: " + additionalInfoStats['sleep']['weekly'] +
                                                "\nMonthly hours of sleep: " + additionalInfoStats['sleep']['monthly'] +
                                                "\nYearly hours of sleep: " + additionalInfoStats['sleep']['yearly'] +
                                                "\nYou slept " + (additionalInfoStats['sleep']['healthySleep'] === 0 ? 'bad' : 'well') +
                                                "\n" + additionalInfoStats['sleep']['sleepHoursPercentage'] + '% of users slept shorter than you'}/>)}
                                        </JAMCol>
                                    </JAMRow>
                                    <JAMImage icon={bed} width='50px' style={{marginTop: '20px'}}/>
                                    <JAMCounter unit=' h' value={sleepHours} caption='' steps={0.25}
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
                                    <JAMRow width='100%'>
                                        <JAMCol>
                                            <JAMLabel caption='Glasses of water' big bold/>
                                        </JAMCol>
                                        <JAMCol>
                                            {additionalInfoStats === '' ? (<JAMInfo/>) : (<JAMInfo
                                                message={"Weekly glasses of water: " + additionalInfoStats['water']['weekly'] +
                                                "\nMonthly glasses of water: " + additionalInfoStats['water']['monthly'] +
                                                "\nYearly glasses of water: " + additionalInfoStats['water']['yearly']}/>)}
                                        </JAMCol>
                                    </JAMRow>
                                    <JAMImage icon={water} width='50px' style={{marginTop: '20px'}}/>
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
                                    <JAMRow width='100%'>
                                        <JAMCol>
                                            <JAMLabel caption='Training hours' big bold/>
                                        </JAMCol>
                                        <JAMCol>
                                            {additionalInfoStats === '' ? (<JAMInfo/>) : (<JAMInfo
                                                message={"Weekly training hours: " + additionalInfoStats['training']['weekly'] +
                                                "\nMonthly training hours: " + additionalInfoStats['training']['monthly'] +
                                                "\nYearly training hours: " + additionalInfoStats['training']['yearly']}/>)}
                                        </JAMCol>
                                    </JAMRow>
                                    <JAMImage icon={dumbbells} width='50px' style={{marginTop: '20px'}}/>
                                    <JAMCounter unit=' h' value={trainingHours} caption='' steps={0.25}
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
                                    <JAMRow width='100%'>
                                        <JAMCol>
                                            <JAMLabel caption='Amount of alcohol' big bold/>
                                        </JAMCol>
                                        <JAMCol>
                                            {additionalInfoStats === '' ? (<JAMInfo/>) : (<JAMInfo
                                                message={"Weekly amount of alcohol: " + additionalInfoStats['alcohol']['weekly'] +
                                                "\nMonthly amount of alcohol: " + additionalInfoStats['alcohol']['monthly'] +
                                                "\nYearly amount of alcohol: " + additionalInfoStats['alcohol']['yearly']}/>)}
                                        </JAMCol>
                                    </JAMRow>
                                    <JAMImage icon={beer} width='50px' style={{marginTop: '20px'}}/>
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

            <JAMRow width='100%'>
                <JAMPanel width={"90%"} maxWidth={"1300px"} backgroundColor={"white"} minWidth='400px'>
                    <JAMRow width='100%' style={{margin: '10px'}}>
                        <JAMButton theme={statisticDays === 7 ? 'normal' : 'white'} value='Week'
                                   onClick={() => changeDateRange(7)}/>
                        <JAMButton theme={statisticDays === 30 ? 'normal' : 'white'} value='Month'
                                   onClick={() => changeDateRange(30)}/>
                        <JAMButton theme={statisticDays === 365 ? 'normal' : 'white'} value='Year'
                                   onClick={() => changeDateRange(365)}/>
                    </JAMRow>
                    <JAMRow width='100%' style={{margin: '10px'}}>
                        <JAMCol>
                            <JAMButton theme='white' value='<' onClick={() => changeDate(false)}/>
                        </JAMCol>
                        <JAMCol>
                            <JAMLabel caption={startDate + ' <~> ' + stopDate} big bold/>
                        </JAMCol>
                        <JAMCol>
                            <JAMButton theme='white' value='>' onClick={() => changeDate(true)}/>
                        </JAMCol>
                    </JAMRow>
                    <JAMRow width='100%'>
                        <JAMCol width='50%'>
                            <JAMChart type='line' header='Weight' caption='Weight' labels={labelsWeight}
                                      data={weightData} width='100%' height='500px'/>
                        </JAMCol>
                        <JAMCol width='50%'>
                            <JAMChart type='bar' header='Glucose' caption='Glucose' labels={labelsWeight}
                                      data={glucoseData} width='100%' height='500px'/>
                        </JAMCol>
                    </JAMRow>
                    <JAMRow width='100%'>
                        <JAMCol width='50%'>
                            <JAMChart type='line' header='Insulin' caption='Insulin' labels={labelsWeight}
                                      data={insulinData} width='100%' height='500px'/>
                        </JAMCol>
                        <JAMCol width='50%'>
                            <JAMChart type='bar' header='Blood Pressure' caption='Blood Pressure' labels={labelsWeight}
                                      data={bloodPressureData} width='100%' height='500px'/>
                        </JAMCol>
                    </JAMRow>
                </JAMPanel>
            </JAMRow>

        </JAMRow>
    )
}

export default Home;