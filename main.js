var aButton = document.getElementById("aButton");
var dButton = document.getElementById("dButton");
var startB = document.getElementById("start");
var nextB = document.getElementById("next");
var sts = document.getElementById("stats");
var status;
startB.addEventListener("click", start);
nextB.addEventListener("click", next);
aButton.style.display = "none";
dButton.style.display = "none";
nextB.style.display = "none";

var ctx = document.getElementById("ctx");
aButton.addEventListener("click", attack);
class character{
  constructor(name, life, attack, defense){
    this.name = name;
    this.life = life;
    this.attack = attack;
    this.defense = defense;
  }
}
var char1 = new character("Jugador", 50, 6, 10);
var char2 = new character("Enemigo", 50, 6, 10);

sts.innerHTML = "Vida del jugador: " + char1.life + "<br />" + "Vida del enemigo: " + char2.life;

function attack () {
  char2.life -= char1.attack
  ctx.innerHTML = char1.name + " attaca a " + char2.name + " con " + char1.attack + " puntos de ataque.";
  console.log(char2.life);
}

function start() {
  startB.style.display = "none";
  nextB.style.display = "";
  ctx.innerHTML = "Bienvenido, jugador."
  status = 0;
}
var x = -1;
function next () {
  x++
  ctx.innerHTML = h[x];
  endNext();
}
function combat() {
  var turn;
  
}
function endNext() {
  if (x === h.length){
    nextB.style.display = "none";
    aButton.style.display = "";
    dButton.style.display = "";
    ctx.innerHTML = "Comienza el combate";
  }
}
var h = [
  "Caminas por dentro de la cueve",
  "Te has topado con una cucaracha!",
  "Ahora debes matarla",
  "Pobre cucaracha",
  "Pero es la ley del más fuerte"
];
