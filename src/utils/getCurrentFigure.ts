import {Figures} from "../consts/figures";

//Получение текущей фигуры
export function getCurrentFigure(step: number): Figures {
    return step % 2 ? Figures.X : Figures.O
}
