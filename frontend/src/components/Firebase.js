import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyCexWv-RYHCUD9MGI192fMIxRj_pTZRaDM",
  authDomain: "imageuploading-34005.firebaseapp.com",
  projectId: "imageuploading-34005",
  storageBucket: "imageuploading-34005.appspot.com",
  messagingSenderId: "786696802636",
  appId: "1:786696802636:web:04f1374e7d107fd7633fe9"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);