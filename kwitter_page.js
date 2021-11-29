//YOUR FIREBASE LINKS

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBywcRiTF9XfNvMWb_Y6wVRRrx84MIoB_8",
  authDomain: "kwitter-4b0c2.firebaseapp.com",
  databaseURL: "https://kwitter-4b0c2-default-rtdb.firebaseio.com",
  projectId: "kwitter-4b0c2",
  storageBucket: "kwitter-4b0c2.appspot.com",
  messagingSenderId: "534454266065",
  appId: "1:534454266065:web:f283a0d47c239ec7f43df0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({name:user_name,message:msg,like:0});
      document.getElementById("msg").value="";
}
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id);
                        console.log(message_data);
                        //End code
                  }
            });
      });
}

getData();
