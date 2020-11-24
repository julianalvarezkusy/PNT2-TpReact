import {ADD_EVENTO, MODIFY_EVENTO, REMOVE_EVENTO} from '../constants/action_types'

export function addEvento(data){
    console.log('Entra al ACTION')
    return{
        type: ADD_EVENTO,
        data
    }
}

export function modifyEvento(data){
    return{
        type: MODIFY_EVENTO,
        data
    }
}

export function removeEvento(data){
    return{
        type: REMOVE_EVENTO,
        data
    }
}