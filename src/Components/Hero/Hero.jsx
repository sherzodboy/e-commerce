import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_img from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="hand_icon" />
          </div>
          <p>collection</p>
          <p>for everyone</p>
        </div>
        <div className="hero-last-btn">
          <div>Last Collection</div>
          <img src={arrow_icon} alt="arrow_icon" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_img} alt="hero_img" />
      </div>
    </div>
  );
};

export default Hero;
