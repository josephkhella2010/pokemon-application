let btn = document.querySelector("button")
let dropdownMenu = document.querySelector(".dropdown-menu")
let container = document.querySelector(".div-pockemon")
let tryAgain = document.querySelector(".try-again")
let btnReplay = document.querySelector(".replay")
let uldescription = document.querySelector(".description")
let replayDiv = document.querySelector(".replay-div")
let descriptionContainer = document.querySelector(".description-container")
let fightingBtn = document.querySelector(".fighting")
let damage = 0;
let damage1 = 0;
let fightingResult = document.querySelector(".fighting-result")
let fightingResultContainer = document.querySelector(".result-figthing")
let winnerContainer = document.querySelector(".winner-container")

let pokemonOne;
let pokemonTwo;
// fight btns
let fighterOneButton = document.querySelector(".fighter1")
let fighterTwoButton = document.querySelector(".fighter2")
let fightingBtnsContainer = document.querySelector(".fighting-btns-container")

// droupdown function
let selectbox = document.querySelector(".select-box");
let selectoption = document.querySelector(".select-option");
let sovalue = document.querySelector("#sovalue");
let optionsearch = document.querySelector("#optionsearch");
let options = document.querySelector(".options")
let optionslist = document.querySelectorAll(".options li")

class Character {
    constructor(name, type, weight, height, hp, attack, specialAttack, defense, specialDefense, speed, moveName) {
            this.name = name;
            this.type = type;
            this.weight = weight;
            this.height = height;
            this.stat = {
                hp: hp,
                attack: attack,
                specialAttack: specialAttack,
                defense: defense,
                specialDefense: specialDefense,
                speed: speed,
            }
            this.moveName = moveName
        }
        // height function
    static heightandweightFunction(a, b, string, sms, pockemonone, pokemontwo, string1) {

        if (a > b) {
            sms = `<span>${pockemonone.name} is ${string} than ${pokemontwo.name}.<span class="winner"> (the winner is ${pockemonone.name})</span></span>`

        } else if (b > a) {
            sms = `<span>${pokemontwo.name} is   ${string} than  ${pockemonone.name}. <span class="winner"> (the winner is ${pokemontwo.name})</span></span>`

        }
        if (a === b) {
            sms = `${pockemonone.name} and ${pokemontwo.name}  have the same  ${string1}`

        }
        return sms
    }

    //stat function
    static statFunction(a, b, string, sms, pockemonone, pokemontwo) {

        if (a > b) {
            sms = `<span>${pockemonone.name} has  more ${string} than ${pokemontwo.name}. <span class="winner"> (the winner is ${pockemonone.name})</span></span>`
                // sms1 = ` the winner is ${pockemonone.name}`


        }
        if (b > a) {
            sms = `<span>${pokemontwo.name} has more ${string} than  ${pockemonone.name}. <span class="winner"> (the winner is ${pokemontwo.name})</span></span>`
                // sms1 = ` the winner is ${pokemontwo.name}`


        }
        if (a === b) {
            sms = `<span>${pockemonone.name} and ${pokemontwo.name}  have the same ${string}</span>`
                //sms1 = ``
        }
        return sms
    }


    static fightingFunction(pokemonOneStat, pokemonTwoStat, pokemonOne, pokemonTwo, container, fightingsms) {
        let a = pokemonTwo.secondcharacterFunction(damage)
        damage = Math.round((pokemonOneStat.attack.value + pokemonOneStat.specialAttack.value) - (pokemonOneStat.defense.value + pokemonOneStat.specialDefense.value) * 0.8)
        let p = document.createElement("span")

        if (damage < 10) {

            damage = 10

            p.innerHTML = `* ${pokemonOne.name} used ${pokemonOne.moveName} and did ${damage} damage to  attack ${pokemonTwo.name} hp the score of  ${pokemonTwo.name}  is ${a}`

        }
        if (damage > 10) {

            damage = damage

            p.innerHTML = `* ${pokemonOne.name} used ${pokemonOne.moveName} and did ${damage} damage to  attack ${pokemonTwo.name} hp the score of  ${pokemonTwo.name}  is ${a}`

        }
        if (a <= 0) {
            a = 0
            p.innerHTML = `*  ${pokemonTwo.name} is lost. hp the score of  ${pokemonTwo.name}  is ${a}`
                //  victory sound
            let sound = setTimeout(() => {
                var audio = new Audio("./sounds/victory.mp3");
                audio.play();
            }, 1500)


            //     // replay

            fightingBtn.classList.add("stop")

            container.classList.remove("show")
            tryAgain.classList.add("show")
            container.innerHTML = ""
            let h2 = document.createElement("h2")
            h2.innerHTML = "try again"
            tryAgain.append(h2);
            replayDiv.classList.add("show")
            fightingBtn.style.display = "block"
            fightingBtnsContainer.style.visibility = "visible"
            fightingBtnsContainer.style.display = "none"
                // create winner div
            let winnerdiv = document.createElement("div")


            winnerdiv.className = "show-winner-name"
            winnerdiv.innerHTML = `
                                         <h2> The winner is ${pokemonOne.name}</h2>

                                         `
            winnerContainer.append(winnerdiv)

        }

        fightingsms.append(p)
        return fightingsms
    }
    static fightingFunction1(pokemonOneStat, pokemonTwoStat, pokemonOne, pokemonTwo, container, fightingsms) {

            let b = pokemonOne.fristcharacterFunction(damage1)
            damage1 = Math.round((pokemonTwoStat.attack.value + pokemonTwoStat.specialAttack.value) - (pokemonTwoStat.defense.value + pokemonTwoStat.specialDefense.value) * 0.8)

            let p = document.createElement("span")

            if (damage1 < 10) {

                damage1 = 10

                p.innerHTML = `* ${pokemonTwo.name} used ${pokemonTwo.moveName} and did ${damage1} damage to attack ${pokemonOne.name}.HP of ${pokemonOne.name}  is ${b} `

            }
            if (damage1 > 10) {

                damage1 = 10

                p.innerHTML = `* ${pokemonTwo.name} used ${pokemonTwo.moveName} and did ${damage1} damage to attack ${pokemonOne.name}.HP of ${pokemonOne.name}  is ${b} `

            }
            // if (b === 0) {


            //     var audio = new Audio('Victory.mp3');
            //     audio.play();
            //     fightingBtn.classList.add("stop")
            // replay


            //}
            if (b <= 0) {
                b = 0
                p.innerHTML = `*  ${pokemonOne.name} is lost. hp the score of  ${pokemonTwo.name}  is ${b}`
                    //  victory sound
                let sound = setTimeout(() => {
                    var audio = new Audio("./sounds/victory.mp3");
                    audio.play();
                }, 1500)

                ;
                // REPLAY div

                fightingBtn.classList.add("stop")
                container.classList.remove("show")
                tryAgain.classList.add("show")
                container.innerHTML = ""
                let h2 = document.createElement("h2")
                h2.innerHTML = "try again"
                tryAgain.append(h2);
                replayDiv.classList.add("show")
                fightingBtn.style.display = "block"
                fightingBtnsContainer.style.visibility = "visible"
                fightingBtnsContainer.style.display = "none"
                    // create winner div
                let winnerdiv = document.createElement("div")


                winnerdiv.className = "show-winner-name"
                winnerdiv.innerHTML = `
                                         <h2> The winner is ${pokemonTwo.name}</h2>

                                         `
                winnerContainer.append(winnerdiv)
            }



            fightingsms.append(p)
            return fightingsms
        }
        //////////
    secondcharacterFunction(damage) {
        return this.stat.hp.value = this.stat.hp.value - damage
    }
    fristcharacterFunction(damage1) {
        return this.stat.hp.value = this.stat.hp.value - damage1
    }
}

// creat a function for bring all data from api
let getdata = async(apilink) => {
    let data = await fetch(apilink)
    let jsondata = await data.json()
    return jsondata.results
}

/// fucntion create selectmenu
let createSelectMenu = async() => {
    let apidata = await getdata("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151")
    let sovalue = document.querySelector("#sovalue");
    let arroption = []
        //console.log(apidata)
    apidata.forEach((element, index) => {
        let li = document.createElement("li")
        li.dataset.name = element.name
        li.textContent = index + 1 + " - " + element.name
        li.dataset.number = index + 1
        options.append(li)

        let charaterNumber = index + 1
        arroption.push(li)
        li.addEventListener("click", () => {
            sovalue.value = li.dataset.name
            selectbox.classList.remove("active")
        })

    });
    /// dropdown-function

    selectoption.addEventListener("click", () => {
            selectbox.classList.toggle("active")
        })
        //search function
    optionsearch.addEventListener("keyup", () => {

        let filter, li, i, textvalue;
        filter = optionsearch.value.toUpperCase()
        li = options.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            licount = li[i]
            textvalue = licount.textContent || licount.innerText;
            if (textvalue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = ""
            } else {
                li[i].style.display = "none"
            }
        }
    })


    // end
    btn.addEventListener("click", () => {
        createCharacter(sovalue, arroption)


    })

}
createSelectMenu()

// function get charaterdata
let getCharaterData = async(apilink) => {
    let data = await fetch(apilink)
    let jsondata = await data.json()
    return jsondata
}

/// function get charaterdata from api
async function createCharacter(sovalue, option) {
    container.classList.add("show")
    let choosenOption = option.find((el) => {
        return el.dataset.name === sovalue.value
    })

    // let apidata = await getdata("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151")
    // let all = apidata.map(async(el) => {
    //     let p = await getCharaterData(el.url)
    //     return p

    // })
    // let allcharacter = await Promise.all(all)
    // stat array push
    let statobj = []
    let apiCharater = await getCharaterData(` https://pokeapi.co/api/v2/pokemon/${choosenOption.dataset.number}/`)
        //variable move
    let moveName = apiCharater.moves[0].move.name
    apiCharater.stats.forEach((el) => {
            // create stat object
            let stat = {
                name: el.stat.name,
                value: el.base_stat,
            }
            statobj.push(stat)
        })
        //console.log(statobj)

    // foto variable
    let bild = apiCharater.sprites.front_default
        // type variable
    let type = []
    apiCharater.types.forEach((el) => {
        type.push(el.type.name)
    })
    let newdiv = document.createElement("div")
    newdiv.classList.add("container-pockemon")

    container.append(newdiv)
        // call fucntion for color cards according to type
    colorCards(apiCharater, newdiv)


    // create frist instance
    if (container.childElementCount <= 1) {
        pokemonOne = new Character(apiCharater.name, type, apiCharater.weight, apiCharater.height, statobj[0], statobj[1], statobj[2], statobj[3], statobj[4], statobj[5], moveName)
        let divone = creatediv(pokemonOne, bild, newdiv)
        newdiv.append(divone)

    }
    // create second instance
    if (container.childElementCount > 1 && container.childElementCount === 2) {
        pokemonTwo = new Character(apiCharater.name, type, apiCharater.weight, apiCharater.height, statobj[0], statobj[1], statobj[2], statobj[3], statobj[4], statobj[5], moveName)

        let divtwo = creatediv(pokemonTwo, bild)
        newdiv.append(divtwo)
        descriptionContainer.classList.add("show")
        fightingResultContainer.style.display = "flex"


        // compare function between character
        statFunction(pokemonOne, pokemonTwo)


        // fighting btn function
        fightingBtn.addEventListener("click", () => {
            var audio = new Audio("./sounds/fight.mp3");
            audio.play();
            fighterTwoButton.innerHTML = "Turn " + pokemonOne.name
            fighterOneButton.innerHTML = "Turn " + pokemonTwo.name


            fightingBtnsContainer.style.display = "flex"
            if (pokemonOne.stat.speed.value > pokemonTwo.stat.speed.value) {

                fighterTwoButton.classList.add("show")

            }
            if (pokemonOne.stat.speed.value < pokemonTwo.stat.speed.value) {

                fighterOneButton.classList.add("show")


            }
            if (pokemonOne.stat.speed.value === pokemonTwo.stat.speed.value) {
                fighterOneButton.classList.add("show")

            }

            //// compare function
            // let ulsms = document.createElement("p")
            // let ulsms1 = document.createElement("p")

            // fightingFunction(pokemonOne, pokemonTwo)
            // let pokemonOneFight = Character.fightingFunction(pokemonOne.stat, pokemonTwo.stat, pokemonOne, pokemonTwo, container, ulsms)

            // fightingResult.append(pokemonOneFight)

            // let pokemonTwoFight = Character.fightingFunction1(pokemonOne.stat, pokemonTwo.stat, pokemonOne, pokemonTwo, container, ulsms1)

            // fightingResult.append(pokemonTwoFight)
            // uptodate progress function


        })
        let fires = document.querySelectorAll(".fire")

        fighterTwoButton.addEventListener("click", () => {
            fightertwo()
            var audio = new Audio('./sounds/fireball.mp3');
            audio.play();
            container.children[0].style.backgroundColor = "red"
            container.children[1].style.backgroundColor = "blue"
                // shake function
            let settimeone = setTimeout(() => {
                    container.children[1].classList.add("shake")
                    setTimeout(() => {
                        container.children[1].classList.remove("shake")
                    }, 2500)
                }, 1000)
                // fire function

            let settimetwo = setTimeout(() => {
                    fires[0].style.display = "flex"
                    setTimeout(() => {
                        fires[0].style.display = "none"
                    }, 1000)
                }, 1)
                //  expolison sound
            let sound = setTimeout(() => {
                var audio = new Audio('./sounds/explosion.wav');
                audio.play();
            }, 1000)

            let ulsms = document.createElement("p")

            let pokemonOneFight = Character.fightingFunction(pokemonOne.stat, pokemonTwo.stat, pokemonOne, pokemonTwo, container, ulsms)

            fightingResult.append(pokemonOneFight)
            uptodateProgress(pokemonOne, pokemonTwo)

        })
        fighterOneButton.addEventListener("click", () => {

            fighterone()
            var audio = new Audio('./sounds/fireball.mp3');
            audio.play();

            container.children[1].style.backgroundColor = "red"
            container.children[0].style.backgroundColor = "blue"
                // shake function
            let settimeone = setTimeout(() => {
                    container.children[0].classList.add("shake")
                    setTimeout(() => {
                        container.children[0].classList.remove("shake")
                    }, 2500)
                }, 1000)
                // fire function
            let settimetwo = setTimeout(() => {
                    fires[1].style.display = "flex"
                    setTimeout(() => {
                        fires[1].style.display = "none"
                    }, 1000)
                }, 1)
                //  expolison sound
            let sound = setTimeout(() => {
                    var audio = new Audio('./sounds/explosion.wav');
                    audio.play();
                }, 1000)
                //container.children[0].classList.toggle("shake")
                //container.children[0].style.animation = "animation: shake 1.2s linear"

            let ulsms1 = document.createElement("p")
            let pokemonTwoFight = Character.fightingFunction1(pokemonOne.stat, pokemonTwo.stat, pokemonOne, pokemonTwo, container, ulsms1)
                //console.log(pokemonTwoFight)

            fightingResult.append(pokemonTwoFight)
            uptodateProgress(pokemonOne, pokemonTwo)

        })
    }

    if (container.childElementCount > 2) {
        //console.log("finish")
        container.classList.remove("show")
        tryAgain.classList.add("show")
        container.innerHTML = ""
        let p = document.createElement("h2")
        p.innerHTML = "try again"
        tryAgain.append(p);
        replayDiv.classList.add("show")
        fightingBtn.style.display = "block"

    }
}
// function for create pokemoncard
function creatediv(pokemon, img) {
    let newdiv = document.createElement("div");
    newdiv.classList.add("section-pockemon")

    newdiv.innerHTML = `
       
    <div class="img-container">
    <img src="${img}" alt="no found">
    <div class="fire"></div>
        </div>

    <div class="text">

        <h3>name: ${pokemon.name}</h3>
        <h3>weigth: ${pokemon.weight} kg</h3>
        <h3>heigth: ${pokemon.height} cm</h3>
        <h3 id="hp-percent">HP: ${pokemon.stat.hp.value} </h3>
        <progress value="${pokemon.stat.hp.value}" max="150" id="hp"></progress>
        <h3>Attack: ${pokemon.stat.attack.value} </h3>
        <progress value="${pokemon.stat.attack.value}" max="150"></progress>
        <h3>Defence: ${pokemon.stat.defense.value}</h3>
        <progress value="${pokemon.stat.defense.value}" max="150"></progress>
        <h3>Special-Attack: ${pokemon.stat.specialAttack.value} </h3>
        <progress value="${pokemon.stat.specialAttack.value}" max="150"></progress>
        <h3>Special-Defense: ${pokemon.stat.specialDefense.value} </h3>
        <progress value="${pokemon.stat.specialDefense.value}" max="150"></progress>
        <h3>Speed: ${pokemon.stat.speed.value} </h3>
        <progress value="${pokemon.stat.speed.value}" max="150"></progress>

    </div>

`
    let divp = document.createElement("div");
    divp.classList.add("type-div")

    pokemon.type.forEach((el, index) => {
        let p = document.createElement("span")
        p.innerHTML = el
        p.classList.add("type-span")
        divp.append(p)
        newdiv.append(divp)
    })
    return newdiv

}

// function backdiv() {
//     let backdiv = document.createElement("div")
//     backdiv.classList.add("card-back")
//     backdiv.innerHTML = `


// `
//     return backdiv

// }

// array for colors name and vlaue
let colors = [{ name: "fire", color: 'gold' },
        { name: "grass", color: ' rgba(6, 150, 11, 0.925)' },
        { name: "electric", color: '#7df8ffbb' },
        { name: "water", color: '#064658f3' },
        { name: "ground", color: '#8e7325ed' },
        { name: "rock", color: 'rgb(200, 200, 200)' },
        { name: "fairy", color: '#e1ace9d3' },
        { name: "poison", color: ' #98d7a5ba' },
        { name: "bug", color: 'rgba(116, 74, 18, 0.601)' },
        { name: "dragon", color: ' #42bb64b7' },
        { name: "psychic", color: '#97b3e6c3' },
        { name: "flying", color: '#f5f5f5cb' },
        { name: "fighting", color: 'rgba(191, 15, 15, 0.652)' },
        { name: "normal", color: '#ffffffce' },
        { name: "ice", color: ' #aad4e5c3' },

    ]
    // function add color for each div according to type
function colorCards(apiCharater, div, childdiv) {

    let apiColor = apiCharater.types[0].type.name
    let color;

    let choosen = colors.find((el) => {
        return el.name === apiColor
    })
    color = choosen.color
    div.backgroundColor = color;
    div.style.backgroundColor = color;

}

// replay btn function
btnReplay.addEventListener("click", () => {
    tryAgain.style.display = "none";
    location.reload();
})

function statFunction(pokemonOne, pokemonTwo) {
    let allsms = document.createElement("div")
        //// compare function
    let ulsms = document.createElement("p")

    let heightsms = Character.heightandweightFunction(pokemonOne.height, pokemonTwo.height, "longer", ulsms, pokemonOne, pokemonTwo, "height")
    let weightsms = Character.heightandweightFunction(pokemonOne.weight, pokemonTwo.weight, "fatter", ulsms, pokemonOne, pokemonTwo, "weight")
    let hp = Character.statFunction(pokemonOne.stat.hp.value, pokemonTwo.stat.hp.value, "HP", ulsms, pokemonOne, pokemonTwo)
    let attack = Character.statFunction(pokemonOne.stat.attack.value, pokemonTwo.stat.attack.value, "Attack", ulsms, pokemonOne, pokemonTwo)
    let defense = Character.statFunction(pokemonOne.stat.defense.value, pokemonTwo.stat.defense.value, "Defense", ulsms, pokemonOne, pokemonTwo)
    let specialAttack = Character.statFunction(pokemonOne.stat.specialAttack.value, pokemonTwo.stat.specialAttack.value, "special-Attack", ulsms, pokemonOne, pokemonTwo)
    let specialDefense = Character.statFunction(pokemonOne.stat.specialDefense.value, pokemonTwo.stat.specialDefense.value, "special-Defense", ulsms, pokemonOne, pokemonTwo)
    let speed = Character.statFunction(pokemonOne.stat.speed.value, pokemonTwo.stat.speed.value, "speed", ulsms, pokemonOne, pokemonTwo)
        //  functions if satser färg for högsta värde
    addColorForText(pokemonOne, pokemonTwo)
    allsms.innerHTML = `
                   
                    <p>* ${weightsms}.</p>
                    <p>* ${heightsms}.</p>
                    <p>* ${hp}.</p>
                    <p>* ${attack}.</p>
                    <p>* ${defense}.</p>
                    <p>* ${specialAttack}.</p>
                    <p>* ${specialDefense}.</p>
                    <p>* ${speed}.</p>
    
    
        `
    uldescription.append(allsms)


}

//uptodate progress function


function uptodateProgress(pokemonOne, pokemonTwo) {

    let allprogress = document.querySelectorAll("#hp")
    let pockemonOneProgress = allprogress[0]
    let pockemonTwoProgress = allprogress[1]
    pockemonOneProgress.value = pokemonOne.stat.hp.value
    pockemonTwoProgress.value = pokemonTwo.stat.hp.value

    //uptodate hp percent
    let allHpPercent = document.querySelectorAll("#hp-percent")
    let pockemonOneHpPercent = allHpPercent[0]
    let pockemonTwoHpPercent = allHpPercent[1]
    pockemonOneHpPercent.innerHTML = `HP : ${pokemonOne.stat.hp.value}`;
    pockemonTwoHpPercent.innerHTML = `HP : ${pokemonTwo.stat.hp.value}`
    if (pokemonOne.stat.hp.value <= 0 || pokemonTwo.stat.hp.value <= 0) {
        pockemonOneHpPercent.innerHTML = "HP: " + 0;
        pockemonTwoHpPercent.innerHTML = "HP: " + 0;
    }

}

function fighterone() {
    fighterOneButton.classList.add("hidden")
    fighterTwoButton.classList.add("show")

}

function fightertwo() {
    fighterOneButton.classList.remove("hidden")
    fighterOneButton.classList.add("show")

    fighterTwoButton.classList.remove("show")

}

/// add color text function
function addColorForText(pokemonOne, pokemonTwo) {
    if (pokemonOne.height > pokemonTwo.height) {
        container.children[0].children[0].children[1].children[2].style.color = "red"
    }
    if (pokemonTwo.height > pokemonOne.height) {
        container.children[1].children[0].children[1].children[2].style.color = "red"
    }

    if (pokemonOne.stat.hp.value > pokemonTwo.stat.hp.value) {
        container.children[0].children[0].children[1].children[3].style.color = "red"
    }
    if (pokemonTwo.stat.hp.value > pokemonOne.stat.hp.value) {
        container.children[1].children[0].children[1].children[3].style.color = "red"
    }
    if (pokemonOne.stat.attack.value > pokemonTwo.stat.attack.value) {
        container.children[0].children[0].children[1].children[5].style.color = "red"
    }
    if (pokemonTwo.stat.attack.value > pokemonOne.stat.attack.value) {
        container.children[1].children[0].children[1].children[5].style.color = "red"
    }
    if (pokemonOne.stat.defense.value > pokemonTwo.stat.defense.value) {
        container.children[0].children[0].children[1].children[7].style.color = "red"
    }
    if (pokemonTwo.stat.defense.value > pokemonOne.stat.defense.value) {
        container.children[1].children[0].children[1].children[7].style.color = "red"
    }
    if (pokemonOne.stat.specialAttack.value > pokemonTwo.stat.specialAttack.value) {
        container.children[0].children[0].children[1].children[9].style.color = "red"
    }
    if (pokemonTwo.stat.specialAttack.value > pokemonOne.stat.specialAttack.value) {
        container.children[1].children[0].children[1].children[9].style.color = "red"
    }
    if (pokemonOne.stat.specialDefense.value > pokemonTwo.stat.specialDefense.value) {
        container.children[0].children[0].children[1].children[11].style.color = "red"
    }
    if (pokemonTwo.stat.specialDefense.value > pokemonOne.stat.specialDefense.value) {
        container.children[1].children[0].children[1].children[11].style.color = "red"
    }
    if (pokemonOne.stat.speed.value > pokemonTwo.stat.speed.value) {
        container.children[0].children[0].children[1].children[13].style.color = "red"
    }
    if (pokemonTwo.stat.speed.value > pokemonOne.stat.speed.value) {
        container.children[1].children[0].children[1].children[13].style.color = "red"
    }
}