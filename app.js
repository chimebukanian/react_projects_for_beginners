let obj = {name: "neo", complexion: 'dark', age: 30}

// spread operator
let obj2 = {...obj, age: 31, country: 'USA'}

console.log(obj2) // { name: 'neo', complexion: 'dark', age: 31, country: 'USA' }

function greet(name) {
    return `Hello ${name}`
}

greet('Neo') // Hello Neo