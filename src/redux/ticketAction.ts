import { Firestore, addDoc, collection, doc, getDocs, getFirestore, updateDoc } from "@firebase/firestore";
import {  fetchDateTitketStart, fetchDataTitketSuccess } from "./titketSlice";
import { AppThunk, RootState } from "./store";
import {titketData} from "./data/titketData";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { firestore } from "../firebase/fibaseConfig";

  export const fetchtitketData = (): AppThunk => async (dispatch, getState) => {
    dispatch(fetchDateTitketStart());
  
      const firestore = getFirestore();
      const titketCollectionRef = collection(firestore, "titket");
      const querySnapshot = await getDocs(titketCollectionRef);
  
      if (!querySnapshot.empty) {
        const rows: titketData[] = querySnapshot.docs.map((doc) => doc.data() as  titketData);
        dispatch(fetchDataTitketSuccess(rows));
      }
 
  };
  
  export const updatetitketData = createAsyncThunk(
    "titket/updatetitketData",
    async (updatedData: titketData, { getState }) => {

        const data = useSelector((state: RootState) => state.titket.dataTitket);
        const { name } = updatedData;
  
        // Kiểm tra xem dữ liệu có tồn tại trong store hay không
        const existingData = data.find(
          (item: { name: string }) => item.name === name
        );
    
  
        // Cập nhật dữ liệu trong Firestore
        const titketDocRef = doc(firestore, "titket", name);
        const updatedDataObject = { ...updatedData };
        await updateDoc(titketDocRef, updatedDataObject);
  
        return updatedData; // Trả về dữ liệu đã được cập nhật
 
    }
  );
  
  export const addNewtitket = createAsyncThunk(
    'titket/addNewtitket',
    async (newtitketData: any) => {
      const firestore: Firestore = getFirestore();
      const newtitketDocRef = await addDoc(collection(firestore, 'titket'), newtitketData);
      const newtitketId = newtitketDocRef.id;
      
      return { id_sv: newtitketId, ...newtitketData };
    }
  );
  