import axios from "axios";
import { DELETE, GET } from "./actionType";

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("/get");
    dispatch({
      type: GET,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const handleDelete = (_id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/user/delete/${_id}`);
    dispatch({
      type: DELETE,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.response.data);
  }
};
