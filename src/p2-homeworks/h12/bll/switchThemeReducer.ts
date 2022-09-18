export type ThemeType = "dark" | "red" | "some"

export type ThemeStateType = {
    theme: ThemeType
}

const initState = {
    theme: "some" as ThemeType
}

type FinalActionType = ReturnType<typeof themeAC>

export const themeReducer = (state: ThemeStateType = initState, action: FinalActionType): ThemeStateType => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {...state, theme: action.payload}
        }
        default:
            return state
    }
}

export const themeAC = (newTheme: ThemeType) => ({
    type: "CHANGE_THEME",
    payload: newTheme
}) as const // fix any