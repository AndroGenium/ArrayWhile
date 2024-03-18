oddNumbers = []
evenNumbers = []


// l - luwi k - kenti

let l = 0
while(l < 100){
    l++
    for(i = 0; i < 1;){
        var random = Math.floor(Math.random() * 101);
        if (random % 2 == 0) {
            i += 1
        }
    }
    evenNumbers.push(random)

}
let k = 0
while(k < 100){
    k++
    for(let i = 0; i < 1;){
        var random2 = Math.floor(Math.random() * 101);
        if (random2 % 2 == 0) {
            
        }
        else{
            i += 1
        }
    }
    oddNumbers.push(random2)

}

console.log(oddNumbers)
console.log(evenNumbers)
