import * as actionTypes from "../actions/actionTypes";

const initialState = {
  value: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.VALUE:
      return {
        ...state,
        value: (state.value + action.payload.toString()).replace(/^0/, "")
      };

    case actionTypes.ADD:
      return {
        ...state,
        value: state.value + "+"
      };

    case actionTypes.MINUS:
      return {
        ...state,
        value: state.value + "-"
      };

    case actionTypes.DIVIDE:
      return {
        ...state,
        value: state.value + "/"
      };

    case actionTypes.MULTIPLY:
      return {
        ...state,
        value: state.value + "*"
      };

    case actionTypes.CLEAR:
      return {
        ...state,
        value: 0
      };
    case actionTypes.EQUALS:
      return {
        ...state,
        value: eval(state.value)
      };

    default:
      return state;
  }
}
