import style from "./Card.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Card = (props) => {
  return (
    <div className={style.Container}>
      <p>Name: {props.name}</p>
      <Link to={`/detail/${props.id}`}>
        <img src={props.image} alt="not found" />
      </Link>
      <p>genres: {props.genres}</p>
    </div>
  );
};

export default Card;
