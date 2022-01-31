import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/user";
import useUser from "../../hooks/useUser";
import { addToFav2, addToConnect } from "../../utils/firebase";

const UserCard = ({ item }) => {
  const { user } = useContext(UserContext);
  const userData = useUser(user.uid);
  const { uid } = user;

  return (
    <div className="searchUserCard">
      <img src={item.profileUrl} alt="user pic" />
      <h2>{item.name}</h2>
      <p>
        Age : {item.age} | City : {item.city}
        <br />
        Employement : {item.employement}
      </p>

      <div className="btnDiv">
        <button
          onClick={() =>
            addToConnect(
              uid,
              userData.name,
              userData.profileUrl,
              item.userId,
              item.name,
              item.profileUrl
            )
          }
          className="connectBtn"
        >
          Connect
        </button>
        <button
          onClick={() =>
            addToFav2(uid, item.userId, item.name, item.profileUrl)
          }
        >
          Add to Favorite
        </button>
      </div>
      <Link to={`/profile/${item.userId}`} className="viewBtn">
        View Profile
      </Link>
    </div>
  );
};

export default UserCard;
