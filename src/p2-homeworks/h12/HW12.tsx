import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {themeAC, ThemeType} from "./bll/switchThemeReducer";

const themes = ["dark", "red", "some"];

function HW12() {
    const dispatch = useDispatch()
    const theme = useSelector<AppStoreType, ThemeType>((state) => state.themeSwitch.theme); // useSelector

    // useDispatch, onChangeCallback
    const onChangeCallback = (newTheme: ThemeType) => {
        dispatch(themeAC(newTheme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + "-text"]}>
                homeworks 12
            </span>

            <div>
                <SuperRadio options={themes} onChangeOption={onChangeCallback} value={theme}/>
            </div>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
