import {Figures} from "../consts/figures";

export interface ICell {
    x: number,
    y: number
    value: Figures | null,
    id: number
}