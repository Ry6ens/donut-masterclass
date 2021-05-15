let btn = document.querySelector('#btn');
btn.onclick = function () {
  let more = document.getElementById("more");
  let btn = document.getElementById("btn");
  if (more.style.display === "inline") {
    btn.innerHTML = "Read More";
    more.style.display = "none"
  } else {
    btn.innerHTML = "Less";
    more.style.display = "inline";
  }
}