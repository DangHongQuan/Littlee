import { getFirestore, collection, getDocs } from "firebase/firestore";
import { AppThunk } from "./store";

import {
  DataEvent,
  fetchDataEventSuccess,
  fetchDateEventStart,
} from "./eventSlice";
import { firestore } from "../firebase/fibaseConfig";

export const fetchEventsData = (): AppThunk => async (dispatch, getState) => {
  dispatch(fetchDateEventStart());
 
  const serviceCollectionRef = collection(firestore, "Events");
  const querySnapshot = await getDocs(serviceCollectionRef);
  const rows: DataEvent[] = querySnapshot.docs.map((doc) => {
    const data = doc.data() as DataEvent;
    const id = doc.id;
    return { ...data, id }; // Tạo object mới và gán giá trị cho thuộc tính id
  });
  dispatch(fetchDataEventSuccess(rows));
};
