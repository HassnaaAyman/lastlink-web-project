import React from "react";
import "./styles.css";

//components imports
import NavBar from "../../../components/profile/Navbar";
import AddIcon from "../../../../Infrastructure/assets/svg/add-icon";
import HostedSection from "../../../../Infrastructure/assets/svg/hosted-section";
import AttendedSection from "../../../../Infrastructure/assets/svg/attended-section";

const WebinarDefault = () => {
  //local variables
  const title = "Webinars";
  const subTitle = "Hosted by me";

  return (
    <div className="WebinarDefault">
      <NavBar
        title={title}
        subTitle={subTitle}
        content1={<AddIcon />}
        content2={<HostedSection />}
        content3={<AttendedSection />}
      />
    </div>
  );
};

export default WebinarDefault;
