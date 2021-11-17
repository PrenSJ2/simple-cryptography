const { createHash } = require('crypto')

// create has string

function hash(input){
    return createHash('sha256').update(input).digest('hex')
}

// compare two hashed passowrds

let password = "i<3Tara"
const hash1 = hash(password)
console.log(hash1)

password = "potato"
const hash2 = hash(password);
const match = hash1 === hash2

console.log(match ? ':) good password' : ':( bad password')
