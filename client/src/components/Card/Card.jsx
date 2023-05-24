import style from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={style.Container}>
      <p>Name:{props.name}</p>
      <img src={props.image} alt="not found" />
      <p>genres:{props.genres}</p>
    </div>
  );
};

export default Card;
