import React from "react";
import "./styles.css";

//components imports
import NavBar from "../../../components/profile/Navbar";
import AddIcon from "../../../../Infrastructure/assets/svg/add-icon";
import NetworkingSection from "../../../../Infrastructure/assets/svg/networking-section";
import AttendedSection2 from "../../../../Infrastructure/assets/svg/attended-section2";
import Header from "../../../components/profile/Header/header";
import NavigationSubHeader from "../../../components/profile/NavigationSubHeader/navigation-header";
import Parghraph from "../../../assets/svg/pargaraph";
import Parghraph2 from "../../../assets/svg/parghraph2";
import HostSection from "../../../assets/svg/host-section";

const img = require('../../../assets/images/Ellipse.png');

const About: React.Fc<{}> = (): JSX.Element => {
  //local variables
  const title = "Webinars";
  const subTitle = "Hosted by me";
  return (
    <div className="About">
        <NavBar
          title={title}
          subTitle={subTitle}
          content1={<AddIcon />}
          content2={<div id="About-Section2"><NetworkingSection /></div>}
          content3={<AttendedSection2 />}
        />
      <div className="About-Content">
        <div className="About-Content-Header">
          <Header />
        </div>
        <div className="About-Content-NavigationHeader">
          <NavigationSubHeader />
        </div>
        <div className="About-Content-Info">
          <h3>Last Link URL</h3>
          <div>
            <h3>mylastlink.com/w/a13ca31 </h3>
            <a href=" ">Copy to Clipboard </a>
          </div>
          <h3>Webinar/Call Details</h3>
          <div className="About-Content-Info-Parghraph">
            <Parghraph />
          </div>
          <h3>About this Webinar </h3>
          <div className="About-Content-Info-Parghraph">
            <Parghraph2 />
          </div>
          <h3>Host</h3>
          <div id="About-Content-img">
            <img alt="" src={img}/>
            <HostSection />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
