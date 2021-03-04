import Users from "../users/Users";
import Search from "../users/Search";
import Alert from "../layout/Alert";

import AlertState from "../../context/alert/AlertState";

const Home = () => {
  return (
    <AlertState>
      <Alert></Alert>
      <Search></Search>
      <Users></Users>
    </AlertState>
  );
};

export default Home;
