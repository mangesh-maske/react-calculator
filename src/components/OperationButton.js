import React from "react";
import { connect } from "react-redux";
import { chooseOperation } from "../actions";

class OperationButton extends React.Component{

    onOperationClick = (operation) => {
        this.props.chooseOperation(operation);
    }
    
    render(){
        return(
            <button className="btn" onClick={() => this.onOperationClick(this.props.operation)}>{this.props.operation}</button>
        )
    }
}

const mapStateToProps = (state) => {
    return {state:state};
}

export default connect(mapStateToProps,{chooseOperation})(OperationButton);