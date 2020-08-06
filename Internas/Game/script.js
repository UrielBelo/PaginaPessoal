console.log("Bem-vindo ao meu código");

var Contador = 0;
var Pontos = 0;
var Fase = 0;
var Restante = 4;

var diciplina = document.getElementById("Diciplina"); 
var placar = document.getElementById("Placar");
var resposta = document.getElementById("Resposta");
var tempo = document.getElementById("Tempo");
var conteudo = document.getElementById("Conta");
var conteudoBotao = document.getElementById("botao");
var conter = document.getElementById("Conter");

function win() {
    if (Restante == 0){

        if(Pontos == 5){
            resposta.innerHTML = `<span>Você acertou tudo! PARABÉNS!!</span>`
            conter.innerHTML = `<img src="../../Recursos/giphy win.gif" alt="Ótimo">`
        }
        if(Pontos <= 4){
            resposta.innerHTML = `<span>Ah! você está bem, se puder melhorar um pouco mais seria bom...</span>`
            conter.innerHTML = `<img src="../../Recursos/giphy.gif" alt="Ok">`
        }
        if(Pontos < 3){
            resposta.innerHTML = `<span>Se você já acabou a escola, está precisando voltar a estudar urgentemente!</span>`
            conter.innerHTML = `<img src="../../Recursos/200.gif" alt="Mal">`
        }

        Contador = 0;
        conteudoBotao.innerHTML = "Novamente";
    }
}

function start_button() {
 Contador=Contador+1;
  if(Contador == 1) {
    Start();
    conteudoBotao.innerHTML = " (▀̿̿Ĺ̯̿▀̿ ̿)";
  }
}

function SomarPontos() {
    Pontos=Pontos+1;
}
function AjustarPlacar(){

    placar.innerHTML = (Pontos + "/5");
}

function Start() {
 Matematica();
}

function Validar() {
    ValorUsuario = document.getElementById("ValorUsuario").value;
    if(ValorUsuario == NumeroX){
        resposta.innerHTML = `<span>Você acertou!</span>`
        SomarPontos();
        Matematica();
        AjustarPlacar();
        Restante = Restante - 1;
    }
    else if(ValorUsuario > NumeroX || ValorUsuario < NumeroX){
        resposta.innerHTML = `<span>Você errou!</span>`
        Matematica();
        AjustarPlacar();
        Restante = Restante - 1;
    }
    else {
        console.log("Fatal Error");
    }

    document.getElementById("ValorUsuario").value = "";
}

function Pular(){
    Matematica();
    AjustarPlacar();
    resposta.innerHTML = `<span>Você está precisando estudar mais!</span>`
    Restante = Restante - 1;
}

function Matematica(){
    GerarNumeros();
    CriarConta();

    var Acontecimento=0;

    function GerarNumeros(){
         NumeroA = Math.floor(Math.random()*10+1);
         NumeroB = Math.floor(Math.random()*10+1);
         NumeroX = Math.floor(Math.random()*10+1);
         Operacao = Math.floor(Math.random()*10+1);
    }
    function CriarConta(){
        Sinal = "d";
        Valor = 0;

        if(Operacao <= 10){
            Sinal = "/ ";
            Valor = (NumeroA*NumeroX)/NumeroB;
        }
        if(Operacao < 8){
            Sinal = "x ";
            Valor = (NumeroA*NumeroX)*NumeroB;
        }
        if(Operacao <=5){
            Sinal = "- ";
            Valor = (NumeroA*NumeroX)-NumeroB;
        }
        if(Operacao < 3){
            Sinal = "+ ";
            Valor = (NumeroA*NumeroX)+NumeroB;
        }
        
    }
  Redondo=(Math.floor(Valor)-Valor);

    while(Valor<0 || Redondo!=0){
        GerarNumeros();
        CriarConta();
    }
  
  if(Valor>0 && Redondo==0){
    Conta = (NumeroA + "Y " + Sinal + NumeroB + " = " + Valor);  
    conteudo.innerHTML = `${Conta} </br>`
        Acontecimento=1;
        }

 if(Restante == 0){
    win();
 }
}