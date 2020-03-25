import React from "react";
import "./styles.css";

//components imports
import NavBar from "../../../components/profile/Navbar";
import AddIcon from "../../../../Infrastructure/assets/svg/add-icon";
import NetworkingSection from "../../../../Infrastructure/assets/svg/networking-section";
import AttendedSection2 from "../../../../Infrastructure/assets/svg/attended-section2";
import Header from "../../../components/profile/Header/header";
import NavigationSubHeader from "../../../../Infrastructure/assets/svg/navigation-subHeader2";

const img = require("../../../assets/images/Ellipse.png");

const PeopleTap = () => {
  //local variables
  const title = "Webinars";
  const subTitle = "Hosted by me";
  return (
    <div className="PeopleTap">
      <NavBar
        title={title}
        subTitle={subTitle}
        content1={<AddIcon />}
        content2={
          <div id="PeopleTap-Section2">
            <NetworkingSection />
          </div>
        }
        content3={<AttendedSection2 />}
      />
      <div className="PeopleTap-Content">
        <div className="PeopleTap-Content-Header">
          <Header />
        </div>
        <div className="PeopleTap-Content-NavigationHeader">
          <NavigationSubHeader />
        </div>
        <div className="PeopleTap-Content-Info">
          <div>
            <div>
              <img alt=" " src={img} />
            </div>
            <div className="PeopleTap-UserInfo">
              <h3>Sunil Gulabani </h3>
              <p>Creative Director at ABC Corporation</p>
              <a href=" ">Add a note. What brings you here?</a>
            </div>
          </div>
          <hr />

          <div>
            <div>
              <img alt=" " src={img} />
            </div>
            <div className="PeopleTap-UserInfo">
              <h3>Lester Miles</h3>
              <p>Creative Director at ABC Corporation</p>
              <h4>Looking to learn about online marketing </h4>
            </div>
          </div>
          <hr />

            <div>
            <div>
              <img alt=" " src={img} />
            </div>
            <div className="PeopleTap-UserInfo">
              <h3>Lester Miles</h3>
              <p>Creative Director at ABC Corporation</p>
              <h4> I am here to just meet new people and learn networking skills </h4>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};
export default PeopleTap;
