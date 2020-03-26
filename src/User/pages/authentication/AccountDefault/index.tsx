import React from "react";
import "./styles.css";

//components imports
import NavBar from "../../../../Infrastructure/components/Navbar";
import SettingsSection from "../../../assets/svg/settings-section";

const img = require("../../../assets/images/edit-profile.png");
const profileImg = require("../../../assets/images/profile-picture.png");
const logoutImg = require("../../../assets/images/logout-icon.png");

const AccountDefault = () => {
  //local variables
  const title = "Account";

  return (
    <div className="AccountDefault">
      <NavBar
        accountTitle={
          <div className="AccountDefault-title">
            <img alt=" " src={logoutImg} />
            <h1>{title}</h1>
          </div>
        }
        userInfo={
          <div className="AccountDefault-imgContainer">
            <img alt=" " src={profileImg} />
            <div>
              <p> Noah Stokes </p>
              <span>noahishere@gmail.com</span>
            </div>
          </div>
        }
        content1={
          <div className="AccountDefault-imgContainer">
            <img alt=" " src={img} />
            <p>Edit Profile</p>
          </div>
        }
        content2={<SettingsSection />}
        type="account"
        title="account"
      />
    </div>
  );
};

export default AccountDefault;
