import { Firestore, addDoc, collection, doc, getDocs, getFirestore, updateDoc } from "@firebase/firestore";
import { AppThunk, RootState } from "./store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchContactDataSuccess, fetchDateContactStart } from "./contactSlice";
import { contactData } from "./data/contactData";

  export const fetchcontactData = (): AppThunk => async (dispatch, getState) => {
    dispatch(fetchDateContactStart());
  
      const firestore = getFirestore();
      const contactCollectionRef = collection(firestore, "contact");
      const querySnapshot = await getDocs(contactCollectionRef);
  
      if (!querySnapshot.empty) {
        const rows: contactData[] = querySnapshot.docs.map((doc) => doc.data() as  contactData);
        dispatch(fetchContactDataSuccess(rows));
      }
 
  };
  
  
  
  export const addNewcontact = createAsyncThunk(
    'contact/addNewcontact',
    async (newcontactData: any) => {
      const firestore: Firestore = getFirestore();
      const newcontactDocRef = await addDoc(collection(firestore, 'contact'), newcontactData);
      const newcontactId = newcontactDocRef.id;
      
      return { id_sv: newcontactId, ...newcontactData };
    }
  );
  