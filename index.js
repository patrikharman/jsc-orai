import { ottelOszthato } from "./fuggvenyek.js";
let valt1; /*deklaráció*/
console.log(ottelOszthato(25));



function fv1() {
    {
        let valt1= 25;
        console.log(`blokkon belül valt1: ${valt1}`)
    }
    console.log(`blokkon kívül,de fv belül valt1: ${valt1}`)
    let valt1 = 10; /*lokális vátozó*/
    console.log(`fv1-en belül valt1: ${valt1}`)
}

console.log(`főprogramban valt1: ${valt1}`)
valt1 = 5 /*globális változó*/
//fv1()

//var-ral megadott változó kétféle láthatósággal rendelkezik,vagy modul szintű,vagy fájl szintű ugyanúgy globális változó vagy függvény szintű lokális változó
//let-tel megadott változó esetében a hatókör lehet globális/modulszintű vqagy blokkszintű

function fv2(params) {
    for (var index = 0; index < 3; index++) {
        console.log(index);
        
    }
    console.log(index)
}
fv2()