import { useState, useContext } from "react";

import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const { users, searchUsers, clearUsers } = githubContext;

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const [text, setText] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search users..."
          value={text}
          onChange={handleOnChange}
        />
        <input
          type="submit"
          value="search"
          className="btn btn-dark btn-block"
        />
        {users.length > 0 && (
          <button
            type="button"
            className="btn btn-light btn-block"
            onClick={clearUsers}
          >
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

export default Search;
