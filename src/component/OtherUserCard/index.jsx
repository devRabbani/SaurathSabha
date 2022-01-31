import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/user";
import "./otherUserCard.style.css";
import { removeFav } from "../../utils/firebase";

const OtherUserCard = ({ item }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="otherUserCard">
      <div className="left">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="right">
        <p>{item.name}</p>
        <div className="favBtnDiv">
          <button onClick={() => removeFav(user?.uid, item.favuid)}>
            Remove From Favourite
          </button>
          <Link to={`/profile/${item.favuid}`}>View Profile</Link>
        </div>
      </div>
    </div>
  );
};

export default OtherUserCard;
