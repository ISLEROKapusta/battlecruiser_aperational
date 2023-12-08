var prevScrollpos = window.pageYOffset;
var isMouseOverNavbar = false;

function showNavbar() {
    isMouseOverNavbar = true;
    document.getElementById("navbar").style.top = "0";
}

function hideNavbar() {
    isMouseOverNavbar = false;
    if (prevScrollpos === window.pageYOffset) {
        document.getElementById("navbar").style.top = "-50px"; // Adjust the hiding distance as needed!!!
    }
}

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (!isMouseOverNavbar) {
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-50px"; // Adjust the hiding distance as needed!!!
        }
    }
    prevScrollpos = currentScrollPos;
}