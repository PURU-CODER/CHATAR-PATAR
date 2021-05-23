var firebaseConfig = {
    apiKey: "AIzaSyBZ02OSX86NWEbL6x5rHjPEDlvP5ZghUzQ",
    authDomain: "chatar-patar-14000.firebaseapp.com",
    databaseURL: "https://chatar-patar-14000-default-rtdb.firebaseio.com",
    projectId: "chatar-patar-14000",
    storageBucket: "chatar-patar-14000.appspot.com",
    messagingSenderId: "189014004564",
    appId: "1:189014004564:web:69882f13bcd54ef8b96ec1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();