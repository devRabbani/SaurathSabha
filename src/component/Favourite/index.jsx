import React, { useContext, useEffect } from "react";
import { useState } from "react";
import UserContext from "../../context/user";
import useUser from "../../hooks/useUser";
import { fetchConnectionData, fetchFavourite } from "../../utils/firebase";
import OtherUserCard from "../OtherUserCard";
import "./favourite.style.css";

const Favourite = () => {
  const { user } = useContext(UserContext);
  const [favList, setFavList] = useState();
  const fetchData = async () => {
    const data = await fetchConnectionData(user?.uid, "favourite");
    setFavList(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="favourite">
      {favList ? (
        favList.map((item, i) => <OtherUserCard key={i} item={item} />)
      ) : (
        <p>No data</p>
      )}
    </div>
  );
};

export default Favourite;
