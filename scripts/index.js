function myFunction() {
    var x = document.getElementById("hideCities");
    if (x.style.display === "none") {
        x.style.display = "flex";
        document.getElementById("nameChange").innerHTML = "View Less";

    } else {
        x.style.display = "none";
        document.getElementById("nameChange").innerHTML = "View More";

    }
}