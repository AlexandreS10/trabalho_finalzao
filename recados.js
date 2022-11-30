const recados = document.querySelectorAll("table[]");
document.querySelector("").addEventListener("submit", (e) => {
  e.preventDefault();
  recados.forEach((el) => {
    console.log(el.value);
  });
});
