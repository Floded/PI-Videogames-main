import { useHistory } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
  const navigate = useHistory();
  const goToHome = () => {
    // console.log("click");
    navigate.push("/home");
  };
  return (
    <div className={style.Container}>
      <div className={style.Text}>
        <h1>THE GAMING ZONE</h1>
        <h2>- Landing PI Videogames -</h2>
      </div>
      <div className={style.ButtonContain}>
        <button onClick={goToHome} className={style.Button}>
          <span>Home</span>
        </button>
      </div>
    </div>
  );
};

export default Landing;
