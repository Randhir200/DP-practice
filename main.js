//WAP to get power of 2
let cache = {};

function solve(n){
    if(n in cache){
        
        return `from cache ${cache[n]}`;
    }else{
        cache[n] = 2**n
        return `new one ${cache[n]}`;
    }
}

console.log(solve('5'));
console.log(solve('5'));
console.log(solve('5'));
console.log(solve('6'));
console.log(solve('6'));
    