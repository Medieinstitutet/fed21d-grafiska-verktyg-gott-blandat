

function removeCookies() {
    document.getElementById("cookies").style.display = "none";
  };


function showNav(){
    let nav = document.getElementById("nav")
    if(nav.style.display === "none"){
        nav.style.display = "block";
    }
    else{
        nav.style.display = "none";
    }
  };
