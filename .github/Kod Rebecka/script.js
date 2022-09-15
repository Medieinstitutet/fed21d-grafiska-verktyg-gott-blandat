

function removeCookies() {
    document.getElementById("cookies").style.display = "none";
  };


function showNav(){
    let nav = document.getElementById("nav")
    if(nav.style.display === "block"){
        nav.style.display = "none";
    }
    else{
        nav.style.display = "block";
    }
  };
