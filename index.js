const numbersAndLetters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
let button = document.getElementById("button")
let firstColorBox = document.getElementById("firstColorBox")
let firstHexCode = document.getElementById("firstHexCode")
let secondColorBox = document.getElementById("secondColorBox")
let secondHexCode = document.getElementById("seconHexCode")
let thirdColorBox = document.getElementById("thirdColorBox")
let thirdHexCode = document.getElementById("thirdHexCode")
let newFirstColorBox = document.getElementById("newFirstColorBox")
let newFirstHexCode = document.getElementById("newFirstHexCode")
let newSecondColorBox = document.getElementById("newSecondColorBox")
let newSeconHexCode = document.getElementById("newSeconHexCode")
let newThirdColorBox = document.getElementById("newThirdColorBox")
let newThirdHexCode = document.getElementById("newThirdHexCode")


function generateRandomNumber(){
    let randomNumber = Math.floor(Math.random() * 16)
    return randomNumber
}

button.addEventListener("click", function(){
    let hexCodeFirstBox = "#"
    for(let myFirstLoop = 0; myFirstLoop <6; myFirstLoop++){
        let randomHex = numbersAndLetters[generateRandomNumber()]
        hexCodeFirstBox += randomHex
    }

    firstColorBox.style.backgroundColor = hexCodeFirstBox
    firstHexCode.innerText = hexCodeFirstBox


    let hexCodesecondBox = "#"
    for(let mySecondLoop = 0; mySecondLoop <6; mySecondLoop++){
        let randomHexx = numbersAndLetters[generateRandomNumber()]
        hexCodesecondBox += randomHexx
    }

    secondColorBox.style.backgroundColor = hexCodesecondBox
    secondHexCode.innerText = hexCodesecondBox


    
    let hexCodeThirdBox = "#"
    for(let myThirdLoop = 0; myThirdLoop <6; myThirdLoop++){
        let randomHexxx = numbersAndLetters[generateRandomNumber()]
        hexCodeThirdBox += randomHexxx
    }

    thirdColorBox.style.backgroundColor = hexCodeThirdBox
    thirdHexCode.innerText = hexCodeThirdBox

    let hexCodeFourthBox = "#"
    for(let myFourthLoop = 0; myFourthLoop <6; myFourthLoop++){
        let randomHexxxx = numbersAndLetters[generateRandomNumber()]
        hexCodeFourthBox += randomHexxxx
    }

    newFirstColorBox.style.backgroundColor = hexCodeFourthBox
    newFirstHexCode.innerText = hexCodeFourthBox

    let hexCodefifthBox = "#"
    for(let myFifthLoop = 0; myFifthLoop <6; myFifthLoop++){
        let randomX = numbersAndLetters[generateRandomNumber()]
        hexCodefifthBox += randomX
    }

    newSecondColorBox.style.backgroundColor = hexCodefifthBox
    newSeconHexCode.innerText = hexCodefifthBox

    let hexCodeSixthBox = "#"
    for(let mySixthLoop = 0; mySixthLoop <6; mySixthLoop++){
        let randomXX = numbersAndLetters[generateRandomNumber()]
        hexCodeSixthBox += randomXX
    }

    newThirdColorBox.style.backgroundColor = hexCodeSixthBox
    newThirdHexCode.innerText = hexCodeSixthBox

})

