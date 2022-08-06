import {
    createContext,
    ReactNode,
    useContext,
    useState
} from "react";
import {initialBoard} from "../utils/initialBoard";
import {ICell} from "../types/ICell";

interface AuxProps {
    children: ReactNode
}

export interface GameContextInterface {
    size: number,
    step: number,
    winSeries: number,
    cells: ICell[][],
    setSize: (newValue: number) => void
    setStep: (newValue: number) => void
    setWinSeries: (newValue: number) => void
    setCells: (newValue: ICell[][]) => void
}


export const GameContext = createContext<GameContextInterface | {}>({} as GameContextInterface);

export const GameProvider = ({children}: AuxProps) => {
    const [size, setSize] = useState<number>(5)
    const [winSeries, setWinSeries] = useState<number>(3)
    const [cells, setCells] = useState<ICell[][]>(initialBoard(size))
    const [step, setStep] = useState<number>(0)


    return (
        <GameContext.Provider
            value={{size, setSize, cells, setCells, winSeries, setWinSeries, step, setStep}}
        >
            {children}
        </GameContext.Provider>
    );
}

export const useGameContext = () => useContext(GameContext) as GameContextInterface
