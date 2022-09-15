function removeCookies() {
    document.getElementById("cookies").style.display = "none";
  };


function showNav(){
    let nav = document.getElementById("nav")
    let line1 = document.getElementById("line1");
    let line2 = document.getElementById("line2");
    let line3 = document.getElementById("line3");

    if(nav.style.display === "block"){
        nav.style.display = "none";
        line2.style.display = "block";
        line1.style.top = "25px"
        line1.style.transform = "rotate(0deg)"
        line3.style.top = "49px"
        line3.style.transform = "rotate(0deg)"
    }
    else{
        nav.style.display = "block";
        line2.style.display = "none";
        line1.style.top = "37px"
        line1.style.transform = "rotate(45deg)"
        line3.style.top = "37px"
        line3.style.transform = "rotate(-45deg)"
    }
  };
