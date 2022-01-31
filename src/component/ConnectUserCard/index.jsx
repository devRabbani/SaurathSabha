import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/user";
import { removeConnection } from "../../utils/firebase";
import "./connectUserCard.style.css";

const ConnectUserCard = ({ item }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="connectUserCard">
      <div className="left">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="right">
        <p>{item.name}</p>
        <div className="favBtnDiv">
          <button onClick={() => removeConnection(user.uid, item.uid)}>
            Remove From Connections
          </button>
          <Link to={`/profile/${item.favuid}`}>View Profile</Link>
        </div>
      </div>
    </div>
  );
};

export default ConnectUserCard;
