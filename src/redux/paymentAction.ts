import { Firestore, addDoc, collection, doc, getDocs, getFirestore, updateDoc } from "@firebase/firestore";
import { AppThunk, RootState } from "./store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchContactPaymantSuccess, fetchDatePaymantStart } from "./paymentSlice";
import { paymentData } from "./data/paymentData";

  export const fetchcontactData = (): AppThunk => async (dispatch, getState) => {
    dispatch(fetchDatePaymantStart());
  
      const firestore = getFirestore();
      const contactCollectionRef = collection(firestore, "contact");
      const querySnapshot = await getDocs(contactCollectionRef);
  
      if (!querySnapshot.empty) {
        const rows: paymentData[] = querySnapshot.docs.map((doc) => doc.data() as  paymentData);
        dispatch(fetchContactPaymantSuccess(rows));
      }
 
  };
  
  
  
  export const addNewPaymant = createAsyncThunk(
    'paymant/addNewpaymant',
    async (newcontactData: any) => {
      const firestore: Firestore = getFirestore();
      const newpaymantDocRef = await addDoc(collection(firestore, 'payment'), newcontactData);
      const newpaymantId = newpaymantDocRef.id;
      
      return { id_sv: newpaymantId, ...newcontactData };
    }
  );
  