import { useDispatch } from "react-redux";
import CardContainer from "../../components/CardsContainer/CardContainer";
import { useEffect } from "react";
import { getVideoGames } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  // que haga el dispatch cuando se monte.
  useEffect(() => {
    dispatch(getVideoGames());
  }, []);

  return (
    <div>
      <h1>Soy tu Home</h1>
      <CardContainer />
    </div>
  );
};

export default Home;
