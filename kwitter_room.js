
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
 useer=localStorage.getItem("Uname");
 document.getElementById("user").innerHTML="welcome "+useer+"!";
function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
 row="<div class='roomname' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();
function addroom(){
      r=document.getElementById("room").value;
      firebase.database().ref("/").child(r).update({
            purpose:"adding room name"
      });
      localStorage.setItem("rname",r);
      window.location="kwitter_page.html";
}
function redirect(name){
localStorage.setItem("roomname",name);
window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("Uname");
      localStorage.removeItem("rname");
      window.location="index.html";
}