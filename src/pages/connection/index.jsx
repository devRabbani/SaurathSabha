import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Connected from "../../component/Connected";
import Favourite from "../../component/Favourite";
import UserContext from "../../context/user";
import useUser from "../../hooks/useUser";
import { firebaseApp } from "../../lib/firebase";
import {
  acceptConnect,
  fetchConnectionData,
  fetchRequest,
  removeRequest,
} from "../../utils/firebase";
import "./connection.style.css";

const Connection = () => {
  const [requestList, setRequestList] = useState();
  const user = useUser();

  const fetchData = async () => {
    const data = await fetchConnectionData(user.userId, "requested");
    const data1 = await fetchConnectionData(user.userId, "favourite");
    const data2 = await fetchConnectionData(user.userId, "connections");

    setRequestList(data);
  };

  useEffect(() => {
    fetchData();
    console.count("run");
  }, [firebaseApp]);
  return (
    <div className="container pageBody">
      <h1 className="pageHeading">Your Connection</h1>
      <div>
        {console.log(requestList)}
        {requestList && (
          <div className="requested">
            <p className="requested">Requested</p>
            <div className="requestWrapper">
              {requestList.map((item, i) => (
                <div className="requestSentCard" key={i}>
                  <img src={item.img} alt={item.name} />
                  <p>{item.name}</p>
                  <button onClick={() => removeRequest(user.userId, item.uid)}>
                    Cancel
                  </button>
                  {item.type === "sent" ? (
                    <p>Request Sent</p>
                  ) : (
                    <button
                      onClick={() =>
                        acceptConnect(
                          user.userId,
                          user.name,
                          user.profileUrl,
                          item.uid,
                          item.name,
                          item.img
                        )
                      }
                      className="acceptBtn"
                    >
                      Accept Connection
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="connectionBtnDiv">
          <NavLink to="/connection/connected" activeClassName="connectActive">
            Connected
          </NavLink>
          <NavLink to="/connection/favourite" activeClassName="connectActive">
            My Favourite
          </NavLink>
        </div>
        <Switch>
          <Route path="/connection/favourite" component={Favourite} />
          <Route path="/connection/connected" component={Connected} />
        </Switch>
      </div>
    </div>
  );
};

export default Connection;
