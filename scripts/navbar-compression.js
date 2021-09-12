var width = window.innerWidth;

function collapseNavbar() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
        x.className += " navbar-responsive";
    } else {
        x.className = "navbar";
    }
}
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 60) {
        document.getElementById("navbar").style.boxShadow= "0 3px 3px rgba(0,0,0,0.5)";
    } else {
        document.getElementById("navbar").style.boxShadow= "none"
    }
}