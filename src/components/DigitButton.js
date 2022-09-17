import React from 'react';
import { addDigit } from "../actions";
import { connect } from "react-redux";

class DigitButton extends React.Component {
    
    onDigitClick = (digit) => {
        this.props.addDigit(digit);
    }

    render(){
        return(
            <button className="btn" onClick={() => this.onDigitClick(this.props.digit)}>{this.props.digit}</button>
        )    
    }
}

const mapStateToProps = (state) => {
    return {
        currentOperand:state.calculator.currentOperand ? state.calculator.currentOperand : '',
        previousOperand:state.calculator.previousOperand ? state.calculator.previousOperand : '',
        operation:state.calculator.operation ? state.calculator.operation : ''
    }
}

export default connect(mapStateToProps,{addDigit})(DigitButton);