import axios from "axios";

export const getAnimal = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        dispatch(fetchSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchFail(err));
      });
  };
};

export const FETCH_START = "FETCH_START";
export const fetchStart = () => {
  return { type: FETCH_START };
};

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const fetchSuccess = (animal) => {
  return { type: FETCH_SUCCESS, payload: animal };
};

export const FETCH_FAIL = "FETCH_FAIL";
export const fetchFail = (error) => {
  return { type: FETCH_FAIL, payload: error };
};
