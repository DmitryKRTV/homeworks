export type StateType = {
    isLoading: boolean
}

const initState = {
    isLoading: false
}

type FinalActionType = ReturnType<typeof loadingAC>

export const loadingReducer = (state = initState, action: FinalActionType): StateType => { // fix any
    switch (action.type) {
        case "CHANGE_LOADING": {
            return {...state, isLoading: action.payload}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean) => ({
    type: "CHANGE_LOADING",
    payload: isLoading
}) // fix any