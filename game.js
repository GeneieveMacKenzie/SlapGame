//* Instructions Modal

let modal = document.getElementById("instructionModal");
let btn = document.getElementById("instructions");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
  } 

span.onclick = function() {
    modal.style.display = "none";
}
  
let grindelwald = {
    name: "grindelwald",
    healthPoints: 300,
    hits: 0,
    spells: {
        impedimenta: 10,
        crucio: 20,
        avadaKedavra: 40,
    },
    inventory: []
}

let dumbledore = {
    name: "dumbledore",
    healthPoints: 300,
    hits: 0,
    spells: {
        rictusempra: 5,
        expelliarmus: 10,
        stupify: 15,
    },
    inventory: []
}

let inventory = {
    pendant: {name: "pendant", mod: 10, description: "healed by the blood oath"},
    silverTongue: {name: "silverTongue", mod: 20, description: "healed by your wit"},
    elderWand: { name: "elderWand", mod: 30, description: "healed by the elder wand" },
    deluminator:{name: "deluminator", mod: 10, description: "Due to limited visibility you have been given time to heal"},
    fawkes:{name: "fawkes", mod: 20, description: "Fawkes flies in to heal your wounds"},
    invisibilityCloak: {name: "invisibilityCloak", mod: 30, description: "Grindelwald can't see you!"}
}

/**
 * This should be an if/else statement and I should be on the beach with a Pina Colada
 */
function givePendant() {
    grindelwald.inventory.push(inventory.pendant);

}
function giveSilverTongue() {
    grindelwald.inventory.push(inventory.silverTongue);

}
function giveElderWand() {
    grindelwald.inventory.push(inventory.elderWand);

}
function giveDeluminator() {
    dumbledore.inventory.push(inventory.deluminator);

}
function giveFawkes() {
    dumbledore.inventory.push(inventory.fawkes);
}

function giveInvisibilityCloak() {
    dumbledore.inventory.push(inventory.invisibilityCloak);

}

function addModsDumbledore() {
    let out = 0;
    for (let i = 0; i < dumbledore.inventory.length; i++){
        out += dumbledore.inventory[i].mod
    }
    return out
}

function addModsGrindelwald() {
    let output = 0;
    for (let i = 0; i < grindelwald.inventory.length; i++){
        output += grindelwald.inventory[i].mod
    }
    return output
}

function attack(type) {
    switch (type) {
        case 'rictusempra':
            grindelwald.healthPoints -= 5 + addModsGrindelwald();
            dumbledore.hits++;
            break;
        case 'impedimenta':
            grindelwald.healthPoints -= 10 + addModsGrindelwald();
            dumbledore.hits++;
            break;
        case 'stupefy':
            grindelwald.healthPoints -= 15 + addModsGrindelwald();
            dumbledore.hits++;
            break;
        case 'imperio':
            dumbledore.healthPoints -= 10 + addModsDumbledore();
            grindelwald.hits++;
            break;
        case 'crucio':
            dumbledore.healthPoints -= 20 + addModsDumbledore();
            grindelwald.hits++;
            break;
        case 'avadaKedavra':
            dumbledore.healthPoints -= 30 + addModsDumbledore();
            grindelwald.hits++;
            break;
        default:
    };

    update();
    reset();
}

function reset(){
    if (grindelwald.healthPoints <= 0) {
        alert('Dumbledore Wins')
    } else if (dumbledore.healthPoints <= 0) {
        alert('Grindelwald Wins')
    }
}

function update() {
    document.getElementById("healthDumbledore").innerText = dumbledore.healthPoints.toString()
    document.getElementById("hitsDumbledore").innerText = dumbledore.hits.toString()
    document.getElementById("healthGrindelwald").innerText = grindelwald.healthPoints.toString()
    document.getElementById("hitsGrindelwald").innerText = grindelwald.hits.toString()   
}


