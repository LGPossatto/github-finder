import { useReducer } from "react";
import GithubContext from "./githubContext";
import githubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  SET_ISLOADING,
} from "../types";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Search Users
  const searchUsers = async (text) => {
    setIsLoading();

    const res = await fetch(`https://api.github.com/search/users?q=${text}`);
    const data = await res.json();

    dispatch({ type: SEARCH_USERS, payload: data.items });
  };

  // Get User
  const getUser = async (login) => {
    setIsLoading();

    const res = await fetch(`https://api.github.com/users/${login}`);
    const data = await res.json();

    dispatch({ type: GET_USER, payload: data });
  };

  // Get Repos
  const getUserRepos = async (login) => {
    setIsLoading();

    const res = await fetch(
      `https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc`
    );
    const data = await res.json();

    dispatch({ type: GET_REPOS, payload: data });
  };

  // Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Set isLoading
  const setIsLoading = () => dispatch({ type: SET_ISLOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        searchUsers,
        clearUsers,
        user: state.user,
        getUser,
        repos: state.repos,
        getUserRepos,
        isLoading: state.isLoading,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
