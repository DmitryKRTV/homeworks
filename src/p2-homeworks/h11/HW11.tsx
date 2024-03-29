import React, {useState} from "react"
import SuperRange from "./common/c7-SuperRange/SuperRange"
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange"
import s from "./HW11.module.css"

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={s.globalDiv}>
                <div className={s.valueDiv}>{value1}</div>
                <SuperRange
                    onChangeRange={setValue1}
                    value={value1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div className={s.globalDiv}>
                <div className={s.valueDiv}>{value1}</div>
                <SuperDoubleRange
                    value={[value1, value2]}
                    onChangeRange={([value1, value2]) => {
                        setValue1(value1)
                        setValue2(value2)
                    }}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <div className={s.valueDiv}>{value2}</div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
