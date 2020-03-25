import React from "react";
import "./styles.css";

//components imports
import NavBar from "../../../components/main/Navbar";
import AddIcon from "../../../../Infrastructure/assets/svg/add-icon";
import NetworkingSection from "../../../../Infrastructure/assets/svg/networking-section";
import AttendedSection2 from "../../../../Infrastructure/assets/svg/attended-section2";
import Header from "../../../components/main/Header/header";
import NavigationSubHeader from "../../../components/main/NavigationSubHeader2";
import UserInfoCard from "../../../components/profile/UserInfoCard";

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
            <NetworkingSection />
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
          <UserInfoCard img={img} name="Sunil Gulabani" position="Creative Director at ABC Corporation" note="Add a note. What brings you here?"/>

          <UserInfoCard img={img} name="Lester Miles" position="Creative Director at ABC Corporation" hint="Looking to learn about online marketing"/>

          <UserInfoCard img={img} name="Lester Miles" position="Creative Director at ABC Corporation" hint="I am here to just meet new people and learn networking skills"/>
        </div>
      </div>
    </div>
  );
};
export default PeopleTap;
