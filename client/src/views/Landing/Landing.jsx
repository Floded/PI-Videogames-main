import { useHistory } from "react-router-dom";

const Landing = () => {
  const navigate = useHistory();
  const goToHome = () => {
    // console.log("click");
    navigate.push("/home");
  };
  return (
    <div>
      <h1>Soy tu LANDING PAGE</h1>
      <button onClick={goToHome}>Home</button>
    </div>
  );
};

export default Landing;
