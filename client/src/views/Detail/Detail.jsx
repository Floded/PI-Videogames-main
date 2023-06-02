import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { getById } from "../../redux/actions";

import style from "./Detail.module.css";

const Detail = () => {
  const { detailId } = useParams();
  // console.log(detailId);
  const navigate = useHistory();
  const dispatch = useDispatch();
  // const [detail, setDetail] = useState({});

  useEffect(() => {
    dispatch(getById(detailId));
    // console.log("Pasando por el dispatch");
  }, [dispatch, detailId]);
  const gameDetail = useSelector((state) => state.gameDetail);
  // console.log(gameDetail);

  return (
    <div className={style.Container}>
      <h1>Soy tu Detail</h1>
      <div>
        <button onClick={() => navigate("/")}>Back</button>
      </div>
      {/* <p>id</p> */}
      <h2>Nombre: {gameDetail.name}</h2>
      <img src={gameDetail.background_image} alt="not found" />
      {/* <h3>Plataformas: {gameDetail.platforms}</h3> */}
      <h3>Description: {gameDetail.description}</h3>
      <h3>Fecha de lanzamiento: {gameDetail.released}</h3>
      <h3>Rating: {gameDetail.rating}</h3>
      {/* <h3>Géneros: {gameDetail.genres}</h3> */}
    </div>
  );
};

export default Detail;
