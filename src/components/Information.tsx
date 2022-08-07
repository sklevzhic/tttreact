import React, {FC, useContext} from "react"
import {getCurrentFigure} from "../utils/getCurrentFigure";
import "./Information.css"
import {BoardContext, BoardContextInterface} from "../context/board";

interface InformationProps {
}

export const Information: FC<InformationProps> = () => {
    let {step, isGame, winSeries} = useContext(BoardContext) as BoardContextInterface

    return <div className={""}>
        <div className="information__key">
            <p className="information__value">Счетчик ходов: {step} </p>
        </div>
        {
            isGame && <div className="information__key">
                <p className="information__value">Следующий ход: <span
                    className={"text-2xl"}>{getCurrentFigure(step)}</span></p>
            </div>
        }
        <div className="information__key">
            <p className="information__value">Победная серия: {winSeries}</p>
        </div>
    </div>
}