import React, {ChangeEvent, KeyboardEvent} from "react"
import s from "./Greeting.module.css"

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKeyDownHandlerCallback: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyDownHandlerCallback} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.someClass // need to fix with (?:)

    return (
        <div className={s.greetingField}>
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}
                   onKeyDown={onKeyDownHandlerCallback}

            />
            <button onClick={addUser} className={s.addButton}>add</button>
            <span>{totalUsers}</span>
            {error && <div className={s.errorMessage}>{error}</div>}
        </div>
    )
}

export default Greeting
