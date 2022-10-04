//YOUR FIREBASE LINKS

var firebaseConfig = {
      apiKey: "AIzaSyDYHxWLdHtBVIVGvd2jdbJFNPqZyotuuP8",
      authDomain: "kwitter-37afc.firebaseapp.com",
      databaseURL: "https://kwitter-37afc-default-rtdb.firebaseio.com",
      projectId: "kwitter-37afc",
      storageBucket: "kwitter-37afc.appspot.com",
      messagingSenderId: "646286826222",
      appId: "1:646286826222:web:27bb218dc12744fbcc31ff"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function updatelike(message_id){
      button_id=message_id;
      likes=document.getElementById("button_id").value;
      updatedlikes=Number(likes)+1;
firebase.database().ref(room_name).child(message_id).update({
      like:updated_likes
});
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name=message_data["name"];
message=message_data["message"];
like=message_data["like"];
nameid="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
messagetomessage="<h4 class='message_h4'>"+message+"</h4>";
likebutton="<button class='btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
spantag="<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span> </button>";
row=nameid+messagetomessage+likebutton+spantag;
document.getElementById("output").innerHTML+=row
//End code
      } });  }); }
getData();
room_name=localStorage.getItem("rname");
User_name=localStorage.getItem("Uname");
function send(){
      msg=document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            name:User_name,
            message:msg,
            like:0
      });
      document.getElementById("message").value="";
}
function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("User_name");
      window.location="index.html";
}