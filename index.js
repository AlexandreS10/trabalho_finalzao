const form = document.querySelector("#login-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

  const listaUsuarios = buscarDado();

  if (listaUsuarios.length) {
    const user = listaUsuarios.find(
      (usuario) => usuario.email === email && usuario.senha === senha
    );

    if (!user) {
      alert("Usuario não encontrado!");
      return;
    }

    const usuarioOn = {
      name: user.nome,
      email: user.email,
    };

    localStorage.setItem("usuarioOn", JSON.stringify(usuarioOn));

    form.reset();
    setTimeout(() => {
      location.href = "recados.html";
    }, 2000);

    return;
  }

  alert("Sem cadastros!");
});

function buscarDado() {
  return JSON.parse(localStorage.getItem("usuarios"));
}
