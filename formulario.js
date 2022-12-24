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

const selectEstados = document.getElementById("estado");
estados.forEach(
  (estado) =>
    (selectEstados.innerHTML += `<option value="${estado.value}">${estado.nome}</option`)
);

const _profissao = [
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
const selectProfissao = document.getElementById("profissao");
_profissao.forEach(
  (profissao) =>
    (selectProfissao.innerHTML += `<option value="${profissao.value}">${profissao.nome}</option>`)
);
//tenho que trazer os dados do localStorage, senao existir, eu trago um vetor vazio
let db = JSON.parse(localStorage.getItem("usuarios") || "[]");

const formulario = document.getElementById("form");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let nome = document.getElementById("nome");
  let sobreNome = document.getElementById("Sobrenome");
  let email = document.getElementById("email");
  let senha = document.getElementById("senha");
  let endereco = document.getElementById("endereco");
  let cidade = document.getElementById("cidade");
  let estado = document.getElementById("estado");
  let profissao = document.getElementById("profissao");
  let salario = document.getElementById("Salario");

  const jaExisteEmail = db.some((user) => user.email === email.value);

  if (jaExisteEmail) {
    alert("Email já cadastrado!");
    return;
  }

  let dadosUsuario = {
    nome: nome.value,
    sobreNome: sobreNome.value,
    email: email.value,
    senha: senha.value,
    endereco: endereco.value,
    cidade: cidade.value,
    estado: estado.value,
    profissao: profissao.value,
    salario: salario.value,
  };

  //salvo no vetor
  db.push(dadosUsuario);
  //salvo no localstorage
  localStorage.setItem("usuarios", JSON.stringify(db));

  formulario.reset();

  alert("Dados enviados");
  window.location.href = "index.html";
});
