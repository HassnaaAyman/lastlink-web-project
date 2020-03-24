import React from "react";
import "./styles.css";
import Props from "../../../../Infrastructure/interfaces/navBar.interface";

import RectangleIcon from "../../../../Infrastructure/assets/svg/logo-icon";
import WebinarIcon from "../../../../Infrastructure/assets/svg/webinar-icon";
import AccountIcon from "../../../../Infrastructure/assets/svg/account-icon";

const NavBar: React.FC<Props> = ({ title, subTitle ,content1 , content2 ,content3 }): JSX.Element => {
  return (
    <div className="NavBar">
      <div className="NavBar-SideBar">
        <RectangleIcon />
        <WebinarIcon className="NavBar-WebinarIcon" />
        <AccountIcon />
      </div>
      <div className="NavBar-MainBar">
        <h1 className="NavBar-MainBar-Title">{title}</h1>
        <h3 className="NavBar-MainBar-SubTitle">{subTitle}</h3>
        <div className="NavBar-MainBar-Content">
         {content1}
         {content2}
         {content3}
        </div>
      </div>
    </div>
  );
};
export default NavBar;
