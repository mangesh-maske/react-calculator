const ACTIONS = {
    ADD_DIGIT:'ADD_DIGIT',
    CLEAR:'CLEAR',
    CHOOSE_OPERATION:'CHOOSED_OPERATION',
    EVALUATE:'EVALUATE',
    DELETE_DIGIT:'DELETE_DIGIT'
}

export const addDigit = (digit) => {
    return {
        type:ACTIONS.ADD_DIGIT,
        payload:digit
    }
}

export const clearScreen = () => {
    return {
        type:ACTIONS.CLEAR
    }
}

export const chooseOperation = (operation) =>{
    return{
        type:ACTIONS.CHOOSE_OPERATION,
        payload:operation
    }
}

export const evaluate = () => {
    return {
        type:ACTIONS.EVALUATE
    }
}

export const deleteDigit = () => {
    return {
        type:ACTIONS.DELETE_DIGIT
    }
}