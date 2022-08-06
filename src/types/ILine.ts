import {Figures} from "../consts/figures";

export interface ILines {
    [key: string]: ILine
}

export interface ILine {
    x: string,
    y: string,
    arr: (Figures | null)[]
}

