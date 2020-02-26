import * as actionTypes from "../actions/actionTypes";

const initialState = {
  movies: {
    Search: []
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SEARCH:
      return { ...state, movies: action.payload };
    default:
      return state;
  }
}
