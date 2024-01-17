import { DELETE, GET } from "./actionType";

const init = {
  users: [],
  loading:true
};

export const userReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET:
      return {
        ...state,
        users: payload,
        loading:false
      };
      case DELETE:
        return {
            ...state,users:state.users.filter(el=>el._id!==payload)
        }

    default:
      return state;
  }
};
