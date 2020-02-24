import * as actionTypes from "./actionTypes";

export const value = value => {
  return {
    type: actionTypes.VALUE,
    payload: value
  };
};

export const add = add => {
  return {
    type: actionTypes.ADD,
    payload: add
  };
};

export const minus = minus => {
  return {
    type: actionTypes.MINUS,
    payload: minus
  };
};

export const divide = divide => {
  return {
    type: actionTypes.DIVIDE,
    payload: divide
  };
};

export const multiply = multiply => {
  return {
    type: actionTypes.MULTIPLY,
    payload: multiply
  };
};

export const clear = () => {
  return {
    type: actionTypes.CLEAR
  };
};

export const equals = () => {
  return {
    type: actionTypes.EQUALS
  };
};

export const decimal = () => {
  return {
    type: actionTypes.DECIMAL
  };
};
