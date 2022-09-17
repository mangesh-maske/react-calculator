import { combineReducers } from "redux";

const reducer = (state = {},action) => {
    switch(action.type){
        case 'ADD_DIGIT':
            if(state.overWrite){
                return {
                    ...state,
                    currentOperand:action.payload,
                    overWrite:false
                }
            }
            if(state.currentOperand == '0' && action.payload == '0'){
                return state;
            }
            if(action.payload == '.' && ( state.currentOperand && state.currentOperand.includes('.') )){
                return state;
            }
            return {...state,currentOperand:`${state.currentOperand || ''}${action.payload}`};
        case 'CLEAR':
            return {};
        case 'CHOOSED_OPERATION':
            if(state.currentOperand == null && state.previousOperand == null){
                return state;
            }
            if(state.currentOperand == null){
                return {...state,operation:action.payload};
            }
            if(state.previousOperand == null){
                return {
                    ...state,
                    operation:action.payload,
                    previousOperand:state.currentOperand,
                    currentOperand:null
                }
            }
            return {
                ...state,
                previousOperand:evaluate(state.currentOperand,state.previousOperand,state.operation),
                operation:action.payload,
                currentOperand:null
            }
        case 'EVALUATE':
            if((state.currentOperand == null) || (state.previousOperand == null) || (state.operation == null)){
                return state;
            }
            return{
                ...state,
                previousOperand:null,
                currentOperand:evaluate(state.currentOperand,state.previousOperand,state.operation),
                operation:null,
                overWrite:true
            }
        case 'DELETE_DIGIT':
            if(state.currentOperand == null){
                return state;
            }
            if(state.currentOperand.length == 1){
                return {
                    ...state,
                    currentOperand:null
                }
            }
           return {
            ...state,
            currentOperand:state.currentOperand.slice(0,-1)
           }         
        default:
            return state;
    }
}

const evaluate = (currentOperand,previousOperand,operation) => {
    let result = "";
    let current = parseFloat(currentOperand);
    let previous = parseFloat(previousOperand);
    if(isNaN(current) || isNaN(previous)) return "";
    switch(operation){
        case '+':
            result = previous + current;
            break;
        case '-':
            result = previous - current;
            break;
        case '*':
            result = previous * current;
            break;
        case '/':
            result = previous / current;
            break;    
        default:
            result = '';
    }
    return result.toString();
}

export default combineReducers({
    calculator:reducer
});