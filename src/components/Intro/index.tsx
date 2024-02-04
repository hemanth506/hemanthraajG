import { infoDetails } from "../../utils";
import "./style.css";

const Intro = () => {
  return (
    <div id="about_main_content">
      <div id="about_intro_content">
        <div className="about_introduction">
          <span id="about_intro">{infoDetails.greetings}</span>
        </div>
        <div className="about_introduction">
          <h2 id="about_name">{infoDetails.name}</h2>
        </div>
        <div>
          <h2 id="about_brief">{infoDetails.briefMe}</h2>
        </div>
      </div>
      <div id="about_description">
        <span>
        {infoDetails.describeMe}
        </span>
      </div>
    </div>
  );
};

export default Intro;
