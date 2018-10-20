const hero = {
    name: "",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {type: "", damage: 2},
};

const rest = function(h) {
    h.health = 10;
    return h ;
    
};
const pickUpItem = function(a, b) {
    a.inventory.push(b);

};

const equipWeapon = function(a) {
    if (a.inventory === undefined || a.inventory.length == 0) {
        return;
    } 
    a.weapon = a.inventory[0];
    displayStats();
    document.getElementById("dagger").style.display = "none";
};

const restHero =function(){
    rest(hero);
    displayStats();
}
document.getElementById("inn").addEventListener("click", restHero, false);

const pickUpItemHero = function() {
    pickUpItem(hero, {type: "dagger", damage: 2});

};
document.getElementById("dagger").addEventListener("click", pickUpItemHero, false);

const equipWeaponHero = function() {
    equipWeapon(hero);
};
document.getElementById("bag").addEventListener("click", equipWeaponHero, false);

const displayStats = function() {
    document.getElementById("name").innerText = hero.name;
    document.getElementById("health").innerText = hero.health;
    document.getElementById("weapontype").innerText = hero.weapon.type;
    document.getElementById("weapondamage").innerText = hero.weapon.damage;

    
}
document.getElementById("show").addEventListener("click", displayStats, false)

const changeHero = function() {
    hero.name = document.getElementById("newName").value;
    displayStats();
};

document.getElementById("changeHero").addEventListener("click", changeHero, false);

const fightWithEnemy = function() {
    hero.health = hero.health - Math.floor(Math.random() * 10);
    if (hero.health > 0) {
        alert("Win!");
    } else {
        alert("Lose");
    }
    displayStats();
    document.getElementById("enemy").style.display = "none";
}

document.getElementById("enemy").addEventListener("click", fightWithEnemy, false);

