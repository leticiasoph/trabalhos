 function mudarTexto () {
    document.getElementById
    ("título").textContent = "Você clicou no botao!";
 }
 
 function mudarCor() {
    document.getElementById("mensagem").style.color =
    "blue";
 }
 
 function mostrarNome() {
    let nome = document.getElementById("nome").value;

    document.getElementById("resultado").textContent = "Olá, " + nome + "!";
 }

 let contador =0;

 function aumentar () {
    contador ++;

    document.getElementById ("numero").textContent = contador ;

 }

 function diminuir() {
    contador--;

    document.getElementById ("numero").textContent = contador;
 }