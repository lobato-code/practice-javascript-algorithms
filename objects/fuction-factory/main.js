const Player = (name, level) => {
  let health = level * 2;
  let getName = () => name;
  let getLevel = () => level;
  const die = (enemy) => {
    console.log(`${enemy.getName()} has dead`);
  };

  const damage = (enemy, x) => {
    enemy.health -= x;
    if (enemy.health <= 0) {
      die(enemy);
    }
  };

  const attack = (enemy) => {
    console.log(`
    ${name} has damaged to ${enemy.getName()}
    ${name}: ${health} / ${enemy.getName()}: ${enemy.health}
    `);
    damage(enemy, 1);
  };
  return { health, getLevel, getName, damage, attack };
};

const jhim = Player("Jhim", 10);
const zack = Player("Zack", 10);

jhim.attack(zack);
jhim.attack(zack);
jhim.attack(zack);
