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
class actor{
  constructor(name, life, attack, defense){
    this.name = name;
    this.life = life;
    this.attack = attack;
    this.defense = defense;
  }
  attackDialogue(){
    return this.name + ' ataca con una fuerza de ' + this.attack + 'puntos.'
  }
  defenseDialogue() {
    return this.name + ' defiende con ' + this.defense + ' puntos.'
  }
}
var actorDex = [new actor("Murcielagote", 30, 5, 3), new actor("Mutaracha", 20, 7, 4)];
var player = new actor("Jugador", 20, 6, 5);

//Funcion del boton "Comenzar" ------------------------------------------------
function start() {
  commandReboot(false, true, false, false);
  sts.innerHTML = '';
  ctx.innerHTML = "Bienvenido, jugador.";
  status = 0;
}

//Funcion del boton "Siguiente" -----------------------------------------------
var x = -1; //Variable iniciadora que determina los dialogos
function next () {
  x ++;
  ctx.innerHTML = h[x];
  if(x === h.length) {
    combat();
  }
}
//Funciones de combate ----------------------------------------------------------
function combat() {
  commandReboot(false, false, true, true);
  enemy = actorDex[0];
  status = 2;
  ctx.innerHTML = "¿Que quieres hacer?";
}
function attack () { //Funcion del boton Atacar
  enemyAttack = randomNum(1, 2);
  if (enemyAttack === 1) {
    enemy.life -= player.attack;
    player.life -= enemy.attack;
    ctx.innerHTML = "Atacas a " + enemy.name + " con una fuerza de " + player.attack + " puntos. <br />" + enemy.name + " te ha atacado con " + enemy.attack + " puntos de fuerza.";
  }
  else if (enemyAttack === 2) {
    enemy.life -= (player.attack - enemy.defense);
    ctx.innerHTML = enemy.name + " se defiende! Has atacado con " + (player.attack - enemy.defense) + " puntos de fuerza.";
  }
  charDeath();
  stsCombat();
}
function defense () { //Funcion del boton de defensa
  enemyAttack = randomNum(1, 2);
  if (enemyAttack === 1) {
    player.life -= (enemy.attack - player.defense);
    ctx.innerHTML = "Te has defendido. El ataque de " + enemy.name + " logra causarte " + (enemy.attack - player.defense) + " puntos de daño.";
  }
  else if (enemyAttack === 2) {
    ctx.innerHTML = "Ambos jugadores se han defendido!";
  }
  charDeath();
  stsCombat();
}
function charDeath () {
  x=-1;
  if (player.life <= 0) {
    ctx.innerHTML = defeat[0];
    commandReboot(true, false, false, false);
  }
  else if (enemy.life <= 0) {
    ctx.innerHTML = defeat[1];
    commandReboot(true, false, false, false);
  }
}
//Lineas del narrador ----------------------------------------------------
const defeat = [
  'Tu personaje ha perecido.',
  'Tu personaje ha derrotado al contrincante.'
]
const h = [
  "Tu personaje se encuentra explorando una cueva...",
  "Te has topado con una mutaracha...",
  "Ahora debes matarla..."
];

//Función de números aleatorios --------------------------------------------
function randomNum(min, max){
  let n = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(n);
  return n;
}

//Funcion de la barra de estadísticas ---------------------------------------
function stsCombat(){
  sts.innerHTML = "<b>Vida del jugador:</b> " + player.life + "<br />" + "<b>Vida del enemigo:</b> " + enemy.life;
}

//Checador ----------------------------
/*function stateCheck(){
  switch (x) {
    case 0:

      break;
      default:
  }
}
*/
