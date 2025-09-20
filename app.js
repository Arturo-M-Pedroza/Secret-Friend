// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let friends = []; 

function agregarAmigo() {
    let name = document.getElementById("amigo").value;
    if (name.trim() !== "") {
        friends.push(name);
        document.getElementById("amigo").value = "";
        showFriends();
    } else {
        alert("Por favor, inserte un nombre.");
    }
}

function showFriends() {
    let list = document.getElementById("listaAmigos");
    list.innerHTML = "";
    for (let i = 0; i < friends.length; i++) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(friends[i]));
        list.appendChild(li);
    }
}

function sortearAmigo() {
    if (friends.length === 0) {
        alert("No hay amigos en la lista.");
        return;
    } else {
        let randomIndex = Math.floor(Math.random() * friends.length);
        let randomFriend = friends[randomIndex];
        console.log(randomIndex);
        document.getElementById("resultado").innerHTML = "Tu amigo seleccionado es: " + randomFriend;

    }
}