import React from "react";
import '../App.css';
import { connect } from "react-redux";
import DigitButton from "./DigitButton";
import { clearScreen, evaluate, deleteDigit } from "../actions";
import OperationButton from "./OperationButton";

class App extends React.Component{

    formatOperand = (operand) => {
        const INTEGER_FORMATTER = new Intl.NumberFormat('en-us',{
            maximumFractionDigits:0,
        })
        
        if(operand == null) return
        const [integer,decimal] = operand.split('.');
        if(decimal == null){
            return INTEGER_FORMATTER.format(integer);
        }
        return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
    }

    render(){
        return(
            <div className="calculator-wrapper">
                <div className="output">
                    <div className="previous-operand">{this.props.previousOperand ? this.formatOperand(this.props.previousOperand) : ''} {this.props.operation}</div>
                    <div className="current-operand">{this.props.currentOperand ? this.formatOperand(this.props.currentOperand) : ''}</div>
                </div>
                
                <button className="btn span-two" onClick={() => this.props.clearScreen()}>AC</button>
                <button className="btn" onClick={() => this.props.deleteDigit()}>DEL</button>
                <OperationButton operation="/" />
                <DigitButton digit="1"/>
                <DigitButton digit="2"/>
                <DigitButton digit="3"/>
                <OperationButton operation="*" />
                <DigitButton digit="4"/>
                <DigitButton digit="5"/>
                <DigitButton digit="6"/>
                <OperationButton operation="+" />
                <DigitButton digit="7"/>
                <DigitButton digit="8"/>
                <DigitButton digit="9"/>
                <OperationButton operation="-" />
                <DigitButton digit="." />
                <DigitButton digit="0"/>
                <button className="btn span-two" onClick={() => this.props.evaluate()}>=</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentOperand:state.calculator.currentOperand ? state.calculator.currentOperand : '',
        previousOperand:state.calculator.previousOperand ? state.calculator.previousOperand : '',
        operation:state.calculator.operation ? state.calculator.operation : ''
    };
}

export default connect(mapStateToProps,{clearScreen,evaluate,deleteDigit})(App);