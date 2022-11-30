const estados = [
  { value: "AC", nome: "Acre" },
  { value: "AL", nome: "Alagoas" },
  { value: "AP", nome: "Amapá" },
  { value: "AM", nome: "Amazonas" },
  { value: "BA", nome: "Bahia" },
  { value: "CE", nome: "Ceara" },
  { value: "DF", nome: "Distrito Federal" },
  { value: "ES", nome: "Espírito Santo" },
  { value: "GO", nome: "Goiás" },
  { value: "MA", nome: "Maranhão" },
  { value: "MT", nome: "Mato Grosso" },
  { value: "MS", nome: "Mato Grosso do Sul" },
  { value: "MG", nome: "Minas Gerais" },
  { value: "PA", nome: "Pará" },
  { value: "PB", nome: "Paraíba" },
  { value: "PR", nome: "Paraná" },
  { value: "PE", nome: "Pernambuco" },
  { value: "PI", nome: "Piauí" },
  { value: "RJ", nome: "Rio de Janeiro" },
  { value: "RN", nome: "Rio Grande do Norte" },
  { value: "RS", nome: "Rio Grande do Sul" },
  { value: "RO", nome: "Rondônia" },
  { value: "RR", nome: "Roraima" },
  { value: "SC", nome: "Santa Catarina" },
  { value: "SP", nome: "São Paulo" },
  { value: "SE", nome: "Sergipe" },
  { value: "TO", nome: "Tocantins" },
];

estados.forEach(
  (estado) =>
    (document.getElementById(
      "estado"
    ).innerHTML += `<option value="${estado.value}">${estado.nome}</option`)
);

const profissao = [
  { value: "AG", nome: "Agronomia" },
  { value: "AD", nome: "Administração" },
  { value: "AR", nome: "Arquitetura e Urbanismo" },
  { value: "BI", nome: "Biológicas" },
  { value: "CN", nome: "Contábeis" },
  { value: "CO", nome: "Comunicação" },
  { value: "CI", nome: "Cinema" },
  { value: "DI", nome: "Direito" },
  { value: "DS", nome: "Designer" },
  { value: "EO", nome: "Economia" },
  { value: "ED", nome: "Educação" },
  { value: "EN", nome: "Engenharia/geral" },
  { value: "EC", nome: "Ecologia" },
  { value: "ES", nome: "Estética" },
  { value: "JN", nome: "Jornalismo" },
  { value: "MO", nome: "Moda" },
  { value: "MU", nome: "Música" },
  { value: "OP", nome: "Operador de maquinário" },
  { value: "PR", nome: "Produção/geral" },
  { value: "PU", nome: "Publicidade" },
  { value: "RH", nome: "Relacões Humanas" },
  { value: "SA", nome: "Saúde/geral" },
  { value: "TC", nome: "Tecnologia/geral" },
  { value: "TU", nome: "Turismo" },
  { value: "VN", nome: "Vendas/geral" },
  { value: "VT", nome: "Veterinária" },
  { value: "ZT", nome: "Zootecnia" },
];
profissao.forEach(
  (profissao) =>
    (document.getElementById(
      "profissão"
    ).innerHTML += `<option value="${profissao.value}">${profissao.nome}</option`)
);

const btnEnviar = document.getElementById("enviar");

//tenho que trazer os dados do localStorage, senao existir, eu trago um vetor vazio
let db = JSON.parse(localStorage.getItem("usuarios") || "[]");
btnEnviar.addEventListener("click", (e) => {
  e.preventDefault();
  let nome = document.getElementById("nome").value;
  let sobreNome = document.getElementById("Sobrenome").value;
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;
  let endereco = document.getElementById("endereco").value;
  let cidade = document.getElementById("cidade").value;
  let estado = document.getElementById("estado").value;
  let profissao = document.getElementById("profissão").value;
  let salario = document.getElementById("Salario").value;
  if (
    nome === "" ||
    sobreNome === "" ||
    email === "" ||
    senha === "" ||
    endereco === "" ||
    cidade === "" ||
    estado === "selecione" ||
    profissao === "selecione" ||
    salario === "selecione"
  ) {
    alert("Dados pessoais são obrigatórios!");
  } else {
    let dadosUsuario = {
      nome,
      sobreNome,
      email,
      senha,
      endereco,
      cidade,
      estado,
      profissao,
      salario,
    };

    console.log(dadosUsuario);
    //salvo no vetor
    db.push(dadosUsuario);
    //salvo no localstorage
    localStorage.setItem("usuarios", JSON.stringify(db));
    printDados(dadosUsuario);
    resetDados();

    alert("Dados enviados");
    window.location.href = "index.html";
  }
});

function printDados(dados) {
  for (const key in dados) {
    console.log(`${key} : ${dados[key]}`);
  }
}

function resetDados() {
  document.getElementById("nome").value = "";
  document.getElementById("Sobrenome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("senha").value = "";
  document.getElementById("endereco").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("estado").value = "";
  document.getElementById("profissão").value = "";
  document.getElementById("Salario").value = "";
}
