import React, {useState} from "react";
import s from "./HW13.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requestAPI} from "./dal/requestAPI";

function Request() {
    const [checked, setChecked] = useState(false);
    const [responseData, setResponseData] = useState<any>();

    const sendData = () => {
        requestAPI.madeRequest(checked)
            .then((data) => {
                console.log(data)
                setResponseData(data.data.info)
            })
            .catch((error) => {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
                setResponseData(error.response ? error.response.data.errorText : error.message)
            })
    }

    return (
        <div>
            <SuperButton onClick={sendData}>
                Press me
            </SuperButton>
            <SuperCheckbox checked={checked} onChangeChecked={setChecked}/>
            <div>{JSON.stringify(responseData)}</div>
        </div>
    );
}

export default Request;
