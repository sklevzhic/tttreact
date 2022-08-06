import React, {FC} from "react"

interface InputNumberProps {
    text: string,
    defaultValue: number,
    min: number,
    max: number,
    handlerNewValue: (newValue: number) => void
}

export const InputNumber: FC<InputNumberProps> = ({defaultValue, min, max, text, handlerNewValue}) => {
    const validateSizes = () => {

    }
    const setNewValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newValue = Number(e.target.value)
        handlerNewValue(newValue)
    }

    return <div className="settings__field">
        <p className="settings__text">{text}</p>
        <input type="number" className="settings__input" placeholder="" value={defaultValue} min={min}
               max={max} onBlur={validateSizes} onChange={setNewValue}/>
    </div>
}