import { useEffect, useState, useContext } from "react";
import UserContext from "../context/user";
import { getUserByUid } from "../utils/firebase";

const useUser = () => {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);
  const uid = user?.uid;

  const getUser = async (uid) => {
    const [response] = await getUserByUid(uid);
    setActiveUser(response);
  };

  useEffect(() => {
    getUser(uid);
  }, [uid]);

  return activeUser;
};

export default useUser;
