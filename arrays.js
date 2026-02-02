document.addEventListener("DOMContentLoaded", function () {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]


    const numbersArrayBig = numbersArray.filter(num => num >= 20);

    console.log("opgave 1" + " " + numbersArrayBig);


    catsArray.push("Sniffles")

    console.log("opgave 2 " + catsArray)

    const dogsArraybo = dogsArray.includes("Trixie")

    console.log("opgave 3a " + dogsArraybo)

    const dogsArraybo2 = dogsArray.includes("Baxter")

    console.log("opgave 3b " + dogsArraybo2)

    const catsArraybo = catsArray.includes("Bagheera")

    function cat() {
        if (catsArraybo == true) {
            return "Bagheera"
        } else {
            return undefined
        }
    }

    console.log("opgave 4a " + cat())

    const catsArraybo2 = catsArray.includes("Salem")

    function cat2() {
        if (catsArraybo2 == true) {
            return "Salem"
        } else {
            return undefined
        }
    }

    console.log("opgave 4b " + cat2())



    const numberthree = numbersArray.map((x) => x * 3)

    console.log("opgave 5 " + numberthree)

    console.log("opgave 6 " + dogsArray.join(""))


    const find = fruitsArray.indexOf("Mango")

    console.log("opgave 7a " + find)

    const find2 = fruitsArray.indexOf("Blåbær")

    console.log("opgave 7b " + find2)

}) // ends DOMContentLoaded