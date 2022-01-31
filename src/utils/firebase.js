import { firebaseApp, FieldValue } from "../lib/firebase";

export const isUserExist = async (number) => {
  const result = await firebaseApp
    .firestore()
    .collection("users")
    .where("number", "==", number)
    .get();
  return result.docs.length !== 0;
};

export const getUserByUid = async (uid) => {
  const result = await firebaseApp
    .firestore()
    .collection("users")
    .where("userId", "==", uid)
    .get();

  const user = result.docs.map((item) => item.data());

  return user;
};

export const getAddionalData = async (uid) => {
  const result = await firebaseApp
    .firestore()
    .collection("additionalData")
    .where("userId", "==", uid)
    .get();
  const data = result.docs.map((item) => item.data());
  return data;
};

// export const addToFav = (uid, favUid) => {
//   firebaseApp
//     .firestore()
//     .collection("users ")
//     .where("userId", "==", uid)
//     .limit(1)
//     .get()
//     .then((query) => {
//       query.docs[0].ref.update({
//         favourite: FieldValue.arrayUnion(favUid),
//       });
//       alert("Done");
//     });
// };

export const addToFav2 = async (uid, favuid, name, img) => {
  firebaseApp
    .firestore()
    .collection("favourite")
    .doc(uid)
    .set(
      {
        data: FieldValue.arrayUnion({
          favuid,
          name,
          img,
        }),
      },
      { merge: true }
    )
    .then((data) => {
      alert("Done");
    });

  // console.log(result.exists);
};

export const fetchConnectionData = async (uid, type) => {
  const query = await firebaseApp.firestore().collection(type).doc(uid).get();
  // const data = query.map((doc) => doc.data());
  if (query.exists) {
    const waitdata = await query.data();
    const data = waitdata.data;
    return data;
  }
};

export const removeFav = async (uid, favuid) => {
  const data = await fetchConnectionData(uid, "favourite");
  console.log(data);

  firebaseApp
    .firestore()
    .collection("favourite")
    .doc(uid)
    .update({
      data: data.filter((item) => item.favuid !== favuid),
    });
};

export const removeRequest = async (uid, deleteId) => {
  const newdata1 = await fetchConnectionData(uid, "requested");
  const newdata2 = await fetchConnectionData(deleteId, "requested");
  await firebaseApp
    .firestore()
    .collection("requested")
    .doc(uid)
    .update({
      data: newdata1.filter((item) => item.uid !== deleteId),
    });
  await firebaseApp
    .firestore()
    .collection("requested")
    .doc(deleteId)
    .update({
      data: newdata2.filter((item) => item.uid !== uid),
    });
};

export const removeConnection = async (uid, deleteId) => {
  const data1 = await fetchConnectionData(uid, "connections");
  const data2 = await fetchConnectionData(deleteId, "connections");
  console.log(uid, deleteId);
  await firebaseApp
    .firestore()
    .collection("connections")
    .doc(uid)
    .update({
      data: data1.filter((item) => item.uid !== deleteId),
    });
  await firebaseApp
    .firestore()
    .collection("connections")
    .doc(deleteId)
    .update({
      data: data2.filter((item) => item.uid !== uid),
    });
};

export const addToConnect = async (
  uid,
  userName,
  userImg,
  connectId,
  connectName,
  connectImg
) => {
  await firebaseApp
    .firestore()
    .collection("requested")
    .doc(uid)
    .set(
      {
        data: FieldValue.arrayUnion({
          uid: connectId,
          name: connectName,
          img: connectImg,
          type: "sent",
        }),
      },
      { merge: true }
    );
  await firebaseApp
    .firestore()
    .collection("requested")
    .doc(connectId)
    .set(
      {
        data: FieldValue.arrayUnion({
          uid: uid,
          name: userName,
          img: userImg,
          type: "request",
        }),
      },
      {
        merge: true,
      }
    );
  alert("Done");
};

// export const fetchRequest = async (uid) => {
//   const data = await firebaseApp
//     .firestore()
//     .collection("requested")
//     .doc(uid)
//     .get();
//   if (data.exists) {
//     const newData = data.data().data;
//     return newData;
//   }
// };

export const acceptConnect = async (
  uid,
  userName,
  userImg,
  connectId,
  connectName,
  connectImg
) => {
  await firebaseApp
    .firestore()
    .collection("connections")
    .doc(uid)
    .set(
      {
        data: FieldValue.arrayUnion({
          uid: connectId,
          name: connectName,
          img: connectImg,
        }),
      },
      {
        merge: true,
      }
    );
  await firebaseApp
    .firestore()
    .collection("connections")
    .doc(connectId)
    .set(
      {
        data: FieldValue.arrayUnion({
          uid,
          name: userName,
          img: userImg,
        }),
      },
      {
        merge: true,
      }
    );
  removeRequest(uid, connectId);
};
