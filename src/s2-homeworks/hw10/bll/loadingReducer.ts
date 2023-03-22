const initState = {
    isLoading: false,
}

export type loadingReducerType = {
    isLoading:boolean
}

export const loadingReducer = (state = initState, action: LoadingActionType): loadingReducerType => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING':
            console.log(state)
            console.log(action.isLoading)
            return {...state, isLoading:action.isLoading }

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
