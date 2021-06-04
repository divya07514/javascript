let varOne = 'varOne'

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
}

// not accessible console.log(varTwo)

let name = 'Divya'

if (true) {
    let name = 'Thakur' // variable shadowing
    pet = 'Tom'
    if (true) {
        console.log(name)
        console.log(pet) // leaked global 'name', as this has not been declared any where. always declare variables.
    }
}

if(true){
    console.log(name)
    console.log(pet)
}


