import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import { SearchBar } from "../SearchBar/SearchBar";
// import onSearch from "../../utils/extraFn";

const NavBar = (onSearch) => {
  return (
    <div className={style.Container}>
      <Link to="/home">HOME</Link>
      <Link to="/form">FORM</Link>
      <SearchBar onSearch={(gameId) => PaymentResponse.onSearch(gameId)} />
    </div>
  );
};

export default NavBar;
