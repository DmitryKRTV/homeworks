import React, {ChangeEvent} from "react"
import s from "../c7-SuperRange/SuperRange.module.css";
import {Box, Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number[]) => void
    value?: number | number[]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const handleChange = (event: Event, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as number[])
    };

    return (
        <Box sx={{width: 300}} style={{"display": "inline-block", "margin": "0 10px"}}>
            <Slider
                getAriaLabel={() => "Double range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
            />
        </Box>
    );
}

export default SuperDoubleRange
