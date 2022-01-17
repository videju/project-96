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
  
    room_name = localStorage.getItem("roomname");
    user_name = localStorage.getItem("username");
    
    console.log("room name"+ room_name)
    console.log("user name"+ user_name)

    function logout() {
      localStorage.removeItem("roomname");
      localStorage.removeItem("username");
      window.location = "index.html"; 
    }
    function send() {
          msg = document.getElementById("msg").value;
          console.log("Message "+ msg);
          firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0,
      });
      document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

      } });  }); }
getData();
