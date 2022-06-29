import React from "react"
import {AffairType} from "./HW2";
import AffairsModule from "./Affairs.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix


    return (
        <div className={AffairsModule["affair"]}>
            <div className={AffairsModule["affairName"]}>{props.affair.name}</div>
            <div
                className={props.affair.priority === "low"
                    ? AffairsModule["low"]
                    : props.affair.priority === "middle"
                        ? AffairsModule["middle"]
                        : AffairsModule["high"]}>[{props.affair.priority}]
            </div>
            <div>
                <button className={AffairsModule["affairButton"]} onClick={deleteCallback}>X</button>
            </div>
        </div>
    )
}

export default Affair
