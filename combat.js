function combat() {
  commandReboot(false, false, true, true);
  crearActor();
  status = 2;
  ctx.innerHTML = "¿Que quieres hacer?";
};
function attack() {
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
};
function defense () {
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
};
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
};
