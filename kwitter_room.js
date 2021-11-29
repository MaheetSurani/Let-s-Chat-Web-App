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

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome" + user_name;

function addroom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html"
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room name-" + Room_names);
                  row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.HTML"
}