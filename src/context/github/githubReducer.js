import {
  SEARCH_USERS,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  SET_ISLOADING,
} from "../types";

const githubReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        isLoading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
      };
    case SET_ISLOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default githubReducer;
