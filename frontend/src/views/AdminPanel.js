import React, { useState } from 'react';
import JAMCombobox from '../components/JAMCombobox';
import JAMCol from '../components/JAMCol';
import JAMPanel from '../components/JAMPanel';
import Menubar from './Menubar';
import JAMRow from '../components/JAMRow';
import JAMButton from '../components/JAMButton';
import JAMLoader from '../components/JAMLoader';
import DataTable from 'react-data-table-component';
import API from '../api/API';
var initialRead = true;
const AdminPanel = (props) => {


    const [duringTraining, setDuringTraining] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const [data, setData] = useState([]);
    const [availableMethods, setAvailableMethods] = useState([]);

    const cols = (["Gender", "Glucose", "BloodPressure", "Insulin", "Bmi", "Age", "Outcome"]);

    const columns = cols.map(c => ({
        name: c,
        selector: c.charAt(0).toLowerCase() + c.slice(1),
    }));

    if (initialRead) {
        API.get("bas/entry/get_all_clf", { headers: { Authorization: JSON.parse(localStorage.getItem('token')) } }).then(res => {
            setAvailableMethods(res.data);
            initialRead = false;
        });
        API.get("bas/entry/get_csv", { headers: { Authorization: JSON.parse(localStorage.getItem('token')) } }).then(res => {
            setData(res.data);
            initialRead = false;
        });
    }

    const train = async () => {
        API.get("bas/entry/train", { headers: { Authorization: JSON.parse(localStorage.getItem('token')) } }).then(res => {
            setDuringTraining(false);
        });
    }

    const set_clf = async (clf) => {
        API.get("bas/entry/set_clf?clf=" + clf, { headers: { Authorization: JSON.parse(localStorage.getItem('token')) } });
    }

    return (
        <JAMPanel minHeight='700px' width={"90%"} maxWidth={"1300px"} backgroundColor={"white"} minWidth='400px' style={{ marginTop: '70px', marginBottom: '50px', paddingBottom: '50px', paddingTop: '50px' }}>
            <Menubar color='white' />
            <JAMCol >
                <JAMRow>
                    <JAMCombobox
                        caption="Learning Method"
                        elements={availableMethods}
                        value={selectedOption}
                        onChange={(e) => {
                            setSelectedOption(e.target.value);
                            set_clf(e.target.value);
                        }} />
                </JAMRow>
                <JAMRow>
                    <JAMButton value="Start learning" onClick={() => {
                        setDuringTraining(true);
                        train();
                    }} />
                </JAMRow>
                <JAMLoader show={duringTraining} />
                <DataTable
                    pagination
                    highlightOnHover
                    columns={columns}
                    data={data}
                />
            </JAMCol>
        </JAMPanel>
    )
}

export default AdminPanel;