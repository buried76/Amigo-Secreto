let amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  amigos.push(nombre);
  mostrarLista();
  input.value = "";
}

function mostrarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Agrega al menos un nombre antes de sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[indiceAleatorio];

  document.getElementById("resultado").innerHTML = 
    `<li>🎁 El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}

