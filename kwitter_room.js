const firebaseConfig = {
  apiKey: "AIzaSyAlJCu_r3lDFI0M6MTtR1G9LJUdZSPiT3c",
  authDomain: "adv-c93-letschat-web-app---1.firebaseapp.com",
  databaseURL: "https://adv-c93-letschat-web-app---1-default-rtdb.firebaseio.com",
  projectId: "adv-c93-letschat-web-app---1",
  storageBucket: "adv-c93-letschat-web-app---1.appspot.com",
  messagingSenderId: "862762770932",
  appId: "1:862762770932:web:0f222d902f83d4c60619a1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name +"!";

function add_room() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room Name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
      
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                 console.log("room_name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
            document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToroomname(name) {
      console.log(name);
      localStorage.setItem("roomname", name);
      window.location = "kwitter_page.html"
}

function logout(){
      localStorage.removeItem("roomname");
      localStorage.removeItem("username");
      window.location = "index.html";
}