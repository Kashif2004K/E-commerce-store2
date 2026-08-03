import "./Home.css";
import heroImg from "../Assets/Hero.png";

const Home = () => {
  return (
    <div className="hero">
      <div className="left-hero">
        <p className="le-hero">Limited Edition</p>
        <h1 className="paf">
          Premium <span className="paf-span">Anime Figures</span>{" "}
        </h1>
        <p className="cc-hero">Crafted for Collectors</p>
        <p className="hero-para">
          Highly detailed PVC & resin collectibles from your favourite anime
          series
        </p>
        <button className="btn1">Shop Collection</button>
      </div>
      <div className="right-hero"></div>
    </div>
  );
};

export default Home;
