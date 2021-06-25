
const initState = {

}

export const loginReducer = (state = initState, action:LoginActionType): typeof initState => {
    switch (action.type) {
        case '': {
            return {
                ...state,

            }
        }
        default: return state
    }
}
type LoginActionType ={
    type: ''

}
export const loginAC = ( ): LoginActionType => ({ type: ''})