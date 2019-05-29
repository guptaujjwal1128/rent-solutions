import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyD-f65jc_qKFPy9PJvI3WsBRreZWbOzvW4",
  authDomain: "rent-search-app.firebaseapp.com",
  databaseURL: "https://rent-search-app.firebaseio.com",
  projectId: "rent-search-app",
  storageBucket: "rent-search-app.appspot.com",
  messagingSenderId: "401951330406",
  appId: "1:401951330406:web:ef18e37de55fc513"
};
var fire = firebase.initializeApp(firebaseConfig);
export default fire;
