function login(){
    u=document.getElementById("name").value;
    localStorage.setItem("Uname",u);
    window.location="kwitter_room.html";
}