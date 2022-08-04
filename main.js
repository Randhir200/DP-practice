//WAP to get power of 2

function solve(){
    let cache = {};
    return function(n){
        if(n in cache){
            
            return `from cache --> ${cache[n]}`;
        }else{
            cache[n] = 2**n
            return `new one --> ${cache[n]}`;
        }
    } 
}

const memozied = solve()
console.log(memozied(5));
console.log(memozied(5));
console.log(memozied(5));
console.log(memozied(6));
console.log(memozied(6));
    