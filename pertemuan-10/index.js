//Var, Let, Const

let nama ="stenly";
//let nama = "adam";    //error saat deklarasi ulang
console.log(nama);

//Scope dalam javascript
// 1. Function scope (var)
// 2. Block scope


(function tes(){
for(var i =0;i<10;i++){
    console.log(i);
}
})();
//tes();
//console.log(i);

for (let i=0;i<10;i++){
    console.log(i)
}
//console.log(i)

//ES6
{
    let i;
    for(i = 0; i<10;i++){
        console.log(i)
    }
}

const person = {
    nick: "Mikoto",
    mode: "Mania",
}
console.log("My nick is "+person.nick+". I playing mode "+person.mode+".");

console.log(`My nick is ${person.nick}. I playing mode ${person.mode}.`);

