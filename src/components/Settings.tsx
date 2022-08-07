import React, {FC, memo, useState} from "react"
import "./Settings.css"
import {BoardSizes} from "../consts/boardSizes";
import {InputNumber} from "./Input";
import {useBoardContext} from "../context/board";

interface SettingsProps {

}

export const Settings: FC<SettingsProps> = memo(() => {
    let {size, setSize, winSeriesNewGame, setWinSeriesNewGame, handlerNewGame} = useBoardContext()

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
            defaultValue={winSeriesNewGame}
            handlerNewValue={(newValue) => setWinSeriesNewGame(newValue)}
        />
        <button className={`button buttonNewGame`} onClick={handlerNewGame}> Начать новую игру</button>
    </>
})