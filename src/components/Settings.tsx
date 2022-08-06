import React, {FC, memo} from "react"
import "./Settings.css"
import {BoardSizes} from "../consts/boardSizes";
import {InputNumber} from "./Input";
import {useBoardContext} from "../context/board";

interface SettingsProps {

}

export const Settings: FC<SettingsProps> = memo(() => {
    let {size, setSize, winSeries, setWinSeries, handlerNewGame} = useBoardContext()
    return <>
        <InputNumber
            text={"Размер сетки"}
            min={BoardSizes.min}
            max={BoardSizes.max}
            defaultValue={size}
            handlerNewValue={(newValue) => setSize(newValue)}
        />
        <InputNumber
            text={"Победная серия"}
            min={BoardSizes.min} max={size}
            defaultValue={winSeries}
            handlerNewValue={(newValue) => setWinSeries(newValue)}
        />
        <button className={`button `} onClick={handlerNewGame}> Начать новую игру</button>
    </>
})