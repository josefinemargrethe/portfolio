window.addEventListener("load", sidenVises)

function sidenVises() {
    console.log("siden vises!");
    //registrer klik på menuknap
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);

}

function toggleMenu() {
    console.log("Toggle menu");
    document.querySelector("#menu").classList.toggle("hidden");


    let erSkjult =
        document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        //menuen er nu skjult - ændr menuknap til ☰
        document.querySelector("#menuknap").textContent = "☰";

    } else {
        //menuen er nu vist - ændr menuknap til ✕
        document.querySelector("#menuknap").textContent = "✕";
    }
}



// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector("#myBtn").classList.add("show");
        document.querySelector("#myBtn").classList.remove("myBtn");
    } else {
        document.querySelector("#myBtn").classList.add("hide");
        document.querySelector("#myBtn").classList.remove("show");

    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
