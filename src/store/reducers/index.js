import {ADD_EVENTO, MODIFY_EVENTO, REMOVE_EVENTO} from '../constants/action_types'

const initialState = {
    eventos: [],
    idEventos: 0
}

function rootReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_EVENTO:

            state.idEventos++
            state = Object.assign({}, state, {
                eventos: state.eventos.concat(action.data)
            })
            
            break;
        case MODIFY_EVENTO:

            break;
        
        case REMOVE_EVENTO:

            let id = action.data.id
            

            state = Object.assign({}, state, {
                    
                    eventos: state.eventos.filter(event => event.id !== id)
                })

            break
    
        default:
            break;
    }


    return state
}

export default rootReducer