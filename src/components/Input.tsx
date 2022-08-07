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
        <label className="settings__text"><span>{text}</span>
            <input type="number" className="settings__input" placeholder={text} value={defaultValue} min={min}
                   max={max} onBlur={validateSizes} onChange={setNewValue}/>
        </label>
    </div>
}