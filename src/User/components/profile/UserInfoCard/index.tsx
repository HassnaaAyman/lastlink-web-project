import React from "react";
import Props from "../../../interfaces/userInfo.interface";

const UserInfoCard: React.FC<Props> = ({
  img,
  name,
  position,
  note,
  hint
}): JSX.Element => {
  return (
    <>
      <div>
        <div>
          <img alt=" " src={img} />
        </div>
        <div className="PeopleTap-UserInfo">
          <h3>{name}</h3>
          <p>{position}</p>
          <a href=" ">{note}</a>
          <h4>{hint}</h4>
        </div>
      </div>
      <hr />
    </>
  );
};
export default UserInfoCard;
