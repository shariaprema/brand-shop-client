import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB40Unvw4BGbdkP3et1oYjT6EmuxxOjLtM",
  authDomain: "brand-shop-d8abf.firebaseapp.com",
  projectId: "brand-shop-d8abf",
  storageBucket: "brand-shop-d8abf.appspot.com",
  messagingSenderId: "394664928727",
  appId: "1:394664928727:web:6ab42fb119817148a2d792"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;