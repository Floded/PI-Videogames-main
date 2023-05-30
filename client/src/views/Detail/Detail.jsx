// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   useHistory,
//   useParams,
// } from "react-router-dom/cjs/react-router-dom.min";
// import { getById } from "../../redux/actions";

// import style from "./Detail.module.css";

const Detail = (props) => {
  // const { detailId } = useParams();
  // console.log();
  // const navigate = useHistory();
  // const dispatch = useDispatch();
  // // const [detail, setDetail] = useState({});

  // useEffect(() => {
  //   dispatch(getById());
  // }, [dispatch]);
  // const gameDetail = useSelector((state) => state.gameDetail);
  // console.log(gameDetail);

  return (
    <div>
      <h1>Soy tu Detail</h1>
      {/* <div className={style.ButtonContainer}>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
      <p>id</p>
      <h2>Nombre: {gameDetail.name}</h2>
      <img src={gameDetail.image} alt="not found" />
      <h3>Plataformas: {gameDetail.platform}</h3>
      <h3>Description: {gameDetail.description}</h3>
      <h3>Fecha de lanzamiento: {gameDetail.launchDate}</h3>
      <h3>Rating: {gameDetail.rating}</h3>
      <h3>Géneros: {gameDetail.genres}</h3> */}
    </div>
  );
};

export default Detail;
