var contador = 0;

function acao() {
    document.write("Executou...");
    if (timer == 1) {
        contador = contador + 1;
        document.write(contador + "<br/>");
    }
    if (contador == 7) {
        contador = 0;
        clearInterval(timer);
    }
}

function acao2() {
    document.write("TESTANDO!!! <br/>");
}
// setar para que algo aconteca de tanto em tanto tempo
var timer = setInterval(acao, 1000);
// sera executado apenas umas vez
setTimeout(acao2, 5000);
// para parar o tempo de uma temporização
//var timer = setInterval(acao, 1000);
//clearInterval(timer);
//clearTimeout(timer);

//Criando um objeto
function Animal() {
    // Propriedades
    this.raca = "Cao";
    this.nome = "Mel";
    this.idade = "5";
    this.peso = 7;

    //Metodos - ações
    this.fazerXixi = function() {
        console.log("Xiiiiiiii");
    }
    this.comer = function(kg) {
        console.log("hummm");
        this.peso = this.peso + (kg / 2);
    }
}

//instanciar um objeto
var mel = new Animal();
mel.raca = "Gato";
var lulu = new Animal();
lulu.nome = "Lulu";