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
};

//=============================
//La siguiente funcion crea un enemigo
function crearActor() {
  let emy = MODEX[randomNum(0,1)];
  enemy = {name: null, life: null, attack: null, defense: null};
  enemy = {name: emy.name, life: emy.life, attack: emy.attack, defense: emy.defense};
};

const cucaracha = new actor("Mutaracha", 20, 7, 4);
const murcielago = new actor("Murcielagote", 30, 5, 3);
const MODEX = [cucaracha, murcielago];
