import React from "react";
import "./styles.css";

// interfaces
import Props from "../../interfaces/navBar.interface";

import RectangleIcon from "../../assets/svg/logo-icon";
import WebinarIcon from "../../assets/svg/webinar-icon";
import AccountIcon from "../../assets/svg/account-icon";
import AccountIconActive from "../../../User/assets/svg/account-icon-active";
import WebinarIconInactive from "../../../User/assets/svg/webinar-icon-inactive";

const NavBar: React.FC<Props> = ({
  title,
  subTitle,
  content1,
  content2,
  content3,
  userInfo,
  accountTitle,
  type
}): JSX.Element => {
  return (
    <div className="NavBar">
      <div className="NavBar-SideBar">
        <RectangleIcon />
        {type === "account" ? (
          <>
            <WebinarIconInactive />
            <AccountIconActive />
          </>
        ) : (
          <>
            <WebinarIcon className="NavBar-WebinarIcon" />
            <AccountIcon />
          </>
        )}
      </div>
      <div className="NavBar-MainBar">
        <h1 className="NavBar-MainBar-Title">{title}</h1>
        <div>{accountTitle}</div>
        <div>{userInfo}</div>
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
