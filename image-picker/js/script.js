const getProgLang = document.querySelector("#prog-lang");
const imgThumb = document.querySelector(".img-thumb");

getProgLang.addEventListener("change", function (e) {
  if (getProgLang.value == "vue") {
    imgThumb.src = "img/" + e.target.value + ".png";
  } else if (getProgLang.value == "javascript") {
    imgThumb.src = "img/" + e.target.value + ".png";
  } else if (getProgLang.value == "css") {
    imgThumb.src = "img/" + e.target.value + ".png";
  } else if (getProgLang.value == "html") {
    imgThumb.src = "img/" + e.target.value + ".png";
  } else if (getProgLang.value == "php") {
    imgThumb.src = "img/" + e.target.value + ".png";
  }
  alert("Ini gambar " + e.target.value + ".png");
});
