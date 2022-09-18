import {UserType} from "../HW8";

type ActionType = {
    type: string
    payload: string | number
}

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case "sort": {
            if (action.payload === "up" || action.payload === "down") {
                const newState = [...state].sort((a, b) => {
                    if (a.name > b.name) return 1
                    else if (a.name < b.name) return -1
                    else return 0
                })
                return action.payload === "up" ? newState : newState.reverse()
            }
            return state
        }
        case "check": {
            // need to fix
            return state.filter((i) => i.age >= action.payload)
        }
        default:
            return state
    }
}
