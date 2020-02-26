import * as ActionTypes from "./actionTypes";
import axios from "axios";

export const searchMovie = value => {
  return async function(dispatch) {
    try {
      let { data } = await axios.get(
        `http://www.omdbapi.com/?apikey=cc213f68&s=${value}&y=1980&plot=full`
      );

      dispatch({
        type: ActionTypes.SEARCH,
        payload: data
      });
    } catch (e) {
      console.log(e);
    }
  };
};
