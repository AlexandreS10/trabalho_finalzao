const btnEntrar = document.querySelector("#button");

// btnEntrar.addEventListener("click", (e) => {
//   let email = document.getElementById("email").value;
//   let senha = document.getElementById("senha").value;
//  if (email == "" || senha == "") {
//     alert("preencha os campos");
//   } else if (email == "email" && senha == "senha") {
//     window.location.href = "recados.html";
//   } else {
//     email !== email || senha !== senha;
//     alert("Email ou senha não correspondem ");
//   }
// });
let buscarDado = buscarDado();
console.log(buscarDado);
const form = document.querySelector("#login-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;
  buscarDado.forEach((element) => {
    if (element) {
      console.log(element.email);
    }
  });
});

function buscarDado() {
  return JSON.parse(localStorage.getItem("usuarios")) ?? [];
}
