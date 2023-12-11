
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAST9IJbVbawCwsvEsQQ8zklfjR_ed6_Uc",
  authDomain: "bookyatra-7e831.firebaseapp.com",
  projectId: "bookyatra-7e831",
  storageBucket: "bookyatra-7e831.appspot.com",
  messagingSenderId: "612394010645",
  appId: "1:612394010645:web:9225b2ff37b8164332e61c"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export { auth };
