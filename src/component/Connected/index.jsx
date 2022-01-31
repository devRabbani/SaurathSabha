import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/user";
import { fetchConnectionData } from "../../utils/firebase";
import ConnectUserCard from "../ConnectUserCard";

const Connected = () => {
  const { user } = useContext(UserContext);
  const [connectionList, setConnectionList] = useState();
  const fetchData = async () => {
    const data = await fetchConnectionData(user?.uid, "connections");
    setConnectionList(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="favourite">
      {connectionList ? (
        connectionList.map((item, i) => <ConnectUserCard key={i} item={item} />)
      ) : (
        <p>No data</p>
      )}
    </div>
  );
};

export default Connected;
