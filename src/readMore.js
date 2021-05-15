function readMore() {
    var more = document.getElementsById("more");
    var btn = document.getElementById("btn");

    if (more.style.display === "inline") {
        btn.innerHTML = "Read More";
        more.style.display = "none"
    } else {
        btn.innerHTML = "Less";
        more.style.display = "inline";
    }
}