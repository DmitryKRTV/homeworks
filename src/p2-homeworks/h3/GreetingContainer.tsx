import React, {ChangeEvent, useState, KeyboardEvent} from "react"
import Greeting from "./Greeting"
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>("") // need to fix any
    const [error, setError] = useState<string>("") // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value.trimStart()) // need to fix
    }
    const addUser = () => {
        if (name.trim() === "") {
            setError("field is require!")
            return
        }

        alert(`Hello ${name}!`) // need to fix
        addUserCallback(name);
        setName("");

    }

    const onKeyDownHandlerCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        setError("")
        debugger
        if (e.key === "Enter" && name.trim() !== "") {
            alert(`Hello ${name}!`)
            addUserCallback(name);
            setName("");
        }

        if (e.key === "Enter" && name.trim() === "") {
            setError("field is require!")
        }
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyDownHandlerCallback={onKeyDownHandlerCallback}
        />
    )
}

export default GreetingContainer
