const krBtn = document.getElementById("krBtn");
const enBtn = document.getElementById("enBtn");

const krTexts = document.querySelectorAll(".lang-kr");
const enTexts = document.querySelectorAll(".lang-en");

function setLanguage(lang) {
  localStorage.setItem("lang", lang);

  if (lang === "kr") {
    krTexts.forEach(el => el.style.display = "inline");
    enTexts.forEach(el => el.style.display = "none");

    krBtn.classList.add("active");
    enBtn.classList.remove("active");
  } else {
    krTexts.forEach(el => el.style.display = "none");
    enTexts.forEach(el => el.style.display = "inline");

    enBtn.classList.add("active");
    krBtn.classList.remove("active");
  }
}

krBtn.addEventListener("click", () => setLanguage("kr"));
enBtn.addEventListener("click", () => setLanguage("en"));


const savedLang = localStorage.getItem("lang") || "kr";
setLanguage(savedLang);