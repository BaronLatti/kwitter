
  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyDRzPUe6N1c96JB4p-oA_e4Dola56oYjkw",
      authDomain: "tic-tac-toe-ca90c.firebaseapp.com",
      databaseURL: "https://tic-tac-toe-ca90c-default-rtdb.firebaseio.com",
      projectId: "tic-tac-toe-ca90c",
      storageBucket: "tic-tac-toe-ca90c.appspot.com",
      messagingSenderId: "926810280117",
      appId: "1:926810280117:web:d0321355e553dbde6aaefc"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
