var attackB = document.getElementById("aButton");
var defenseB = document.getElementById("dButton");
var startB = document.getElementById("start");
var nextB = document.getElementById("next");
var sts = document.getElementById("stats");
var ctx = document.getElementById("ctx");
var status, enemyAttack, player, enemy;
startB.addEventListener("click", start);
nextB.addEventListener("click", next);
attackB.addEventListener("click", attack);
defenseB.addEventListener("click", defense);

//=============================
//Dialogos del narrador

const defeat = [
  'Tu personaje ha perecido.',
  'Tu personaje ha derrotado al contrincante.'
]
const h = [
  "Tu personaje se encuentra explorando una cueva.",
  "Te has topado con una criatura",
  "Ahora debes matarla."
];

//=============================
//Funcion del boton "Comenzar"

function start() {
  commandReboot(false, true, false, false);
  sts.innerHTML = '';
  ctx.innerHTML = "Bienvenido, jugador.";
  status = 0;
  player = new actor("Jugador", 20, 6, 5);
};

//=============================
//Funcion del boton "Siguiente"

var x = -1; //Variable iniciadora que determina los dialogos
function next () {
  x ++;
  ctx.innerHTML = h[x];
  if(x === h.length) {
    combat();
  }
};

//=============================
//Funcion de la barra de estadísticas

function stsCombat(){
  sts.innerHTML = "<b>Vida del jugador:</b> " + player.life + "<br />" + "<b>Vida del enemigo:</b> " + enemy.life;
};

//=============================
//Este código reacomoda los botones

function commandReboot(startS, nextS, attackS, defenseS) {
  let value1, value2, value3, value4;
  if (startS === false) {
    value1='none';
  }
  else if (startS === true) {
    value1='inline';
  }
  if (nextS === false) {
    value2='none';
  }
  else if (nextS === true) {
    value2='inline';
  }
  if (attackS === false) {
    value3='none';
  }
  else if (attackS === true) {
    value3='inline';
  }
  if (defenseS === false) {
    value4='none';
  }
  else if (defenseS === true) {
    value4='inline';
  }
  startB.style.display = value1;
  nextB.style.display = value2;
  attackB.style.display = value3;
  defenseB.style.display = value4;
}

//=============================
//Función de números aleatorios
function randomNum(min, max){
  var n = Math.floor(Math.random() * (max - min + 1)) + min;
  return n;
}

//=============================
//Checador ============================
/*function stateCheck(){
  switch (x) {
    case 0:

      break;
      default:
  }
}
*/
