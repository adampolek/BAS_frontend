import React, {useState} from 'react';
import JAMCol from '../components/JAMCol';
import JAMPanel from '../components/JAMPanel';
import Menubar from './Menubar';
import DataTable from 'react-data-table-component';
import API from '../api/API';
import JAMLabel from '../components/JAMLabel';
import JAMRow from '../components/JAMRow';

var initialRead = true;
const History = (props) => {

    const [data, setData] = useState([]);

    const cols = (["EntryDate", "Weight", "Glucose", "Insulin", "BloodPressure", "CigarettesAmount", "SleepHours", "GlassesOfWater", "TrainingHours", "AlcoholAmount", "Healthy"]);

    const columns = cols.map(c => ({
        name: c,
        selector: c.charAt(0).toLowerCase() + c.slice(1),
    }));

    if (initialRead) {
        API.get("bas/user/get_all_entries", {headers: {Authorization: JSON.parse(localStorage.getItem('token'))}}).then(res => {
            res.data.map(item => {
                return item["healthy"] = item["healthy"] === true ? "true" : "false"
            });
            setData(res.data);
            initialRead = false;
        });
    }

    return (
        <JAMPanel minHeight='700px' width={"90%"} maxWidth={"1300px"} backgroundColor={"white"} minWidth='400px' style={{ marginTop: '70px', marginBottom: '50px', paddingBottom: '50px', paddingTop: '50px' }}>
            <Menubar color='white' />
            <JAMRow>

            <JAMCol>
                <JAMLabel header caption="History" />
            </JAMCol>
            <JAMCol >
                <DataTable
                    pagination
                    highlightOnHover
                    columns={columns}
                    data={data}
                    />
            </JAMCol>
            </JAMRow>
        </JAMPanel>
    )
}

export default History;