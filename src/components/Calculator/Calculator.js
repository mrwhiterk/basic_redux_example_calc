import React, { Component } from "react";
import { connect } from "react-redux";
import * as calculatorActions from "../../store/actions";

class Calculator extends Component {
  render() {
    const { value } = this.props.calculator;
    const {
      clear,
      add,
      minus,
      divide,
      multiply,
      value: num,
      equals
    } = this.props;

    return (
      <div className="calculator">
        <input
          type="text"
          className="calculator-screen"
          value={value}
          disabled
        />
        <div className="calculator-keys">
          <button type="button" className="operator" value="+" onClick={add}>
            +
          </button>
          <button type="button" className="operator" value="-" onClick={minus}>
            -
          </button>
          <button
            type="button"
            className="operator"
            value="*"
            onClick={multiply}
          >
            ×
          </button>
          <button type="button" className="operator" value="/" onClick={divide}>
            ÷
          </button>
          <button type="button" value={7} onClick={() => num(7)}>
            7
          </button>
          <button type="button" value={8} onClick={() => num(8)}>
            8
          </button>
          <button type="button" value={9} onClick={() => num(9)}>
            9
          </button>
          <button type="button" value={4} onClick={() => num(4)}>
            4
          </button>
          <button type="button" value={5} onClick={() => num(5)}>
            5
          </button>
          <button type="button" value={6} onClick={() => num(6)}>
            6
          </button>
          <button type="button" value={1} onClick={() => num(1)}>
            1
          </button>
          <button type="button" value={2} onClick={() => num(2)}>
            2
          </button>
          <button type="button" value={3} onClick={() => num(3)}>
            3
          </button>
          <button type="button" value={0} onClick={() => num(0)}>
            0
          </button>
          <button
            type="button"
            className="decimal"
            value="."
            onClick={() => num(".")}
          >
            .
          </button>
          <button
            type="button"
            className="all-clear"
            value="all-clear"
            onClick={clear}
          >
            AC
          </button>
          <button
            type="button"
            className="equal-sign"
            value="="
            onClick={equals}
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  calculator: state.calculator
});

const mapDispatchToProps = dispatch => ({
  clear: () => dispatch(calculatorActions.clear()),
  equals: () => dispatch(calculatorActions.equals()),
  value: char => dispatch(calculatorActions.value(char)),
  add: char => dispatch(calculatorActions.add(char)),
  minus: char => dispatch(calculatorActions.minus(char)),
  divide: char => dispatch(calculatorActions.divide(char)),
  multiply: char => dispatch(calculatorActions.multiply(char))
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
