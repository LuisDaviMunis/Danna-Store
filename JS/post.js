function fazPost(url, body) {
  console.log("Body=", body);
  let request = new XMLHttpRequest();
  request.open("POST", url, true);
  request.setRequestHeader("Content-type", "application/json");
  request.send(JSON.stringify(body));

  request.onload = function () {
    console.log(this.responseText);
  };

  return request.responseText;
}

function cadastraUsuario() {
  event.preventDefault();
  let url = "http://127.0.0.1:5000/usuario";
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;
  console.log(nome);
  console.log(email);

  body = {
    name: nome,
    email: email,
    senha: senha,
  };

  fazPost(url, body);
}
