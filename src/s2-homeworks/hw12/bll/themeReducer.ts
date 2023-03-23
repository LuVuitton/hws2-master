export  type ThemeIdType = {
    themeId: number,
}
export type changeThemeIdACType = {
    type:string
    id:number
}



const initState:ThemeIdType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: changeThemeIdACType): ThemeIdType => { // fix any
    switch (action.type) {
        case ('SET_THEME_ID'):{
            return {...state, themeId:action.id}
        }
            

        default:
            return state
    }
}


export const changeThemeId = (id: number): changeThemeIdACType => ({ type: 'SET_THEME_ID', id }) // fix any
