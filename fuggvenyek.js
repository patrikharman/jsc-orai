var szam = 5
export function ottelOszthato(szam) {
    let oszthatoEOt = false;
    if (Number.isInteger(szam)) {
        if (szam <= Number.MAX_SAFE_INTEGER) {
            if (szam % 5 === 0){
                oszthatoEOt = true;
           }
    }
    else {
        oszthatoEOt = "Túl nagy szám!"
    }
   
    
}else{
    oszthatoEOt = "Nem szám!"

}
return oszthatoEOt;
}

function ottelOszthatoTeszt() {
    //tesztelés
// 0 -> 0
console.log(`szam = 0-> true`)
console.log(`szam=0->${ottelOszthato(0)}`)

// 1 -> false
console.log(`szam = 1-> false`)
console.log(`szam=1->${ottelOszthato(1)}`)


// 2 -> false
console.log(`szam = 2-> false`)
console.log(`szam=2->${ottelOszthato(2)}`)



// 3 -> false
console.log(`szam = 3-> false`)
console.log(`szam=3->${ottelOszthato(3)}`)



// 4 -> false
console.log(`szam = 4-> false`)
console.log(`szam=4->${ottelOszthato(4)}`)



// 5 -> true
console.log(`szam = 5-> true`)
console.log(`szam=5->${ottelOszthato(5)}`)



// 55.68 -> false
console.log(`szam = 55.68-> false`)
console.log(`szam=55.68->${ottelOszthato(55.68)}`)



// -25 -> true
console.log(`szam = -25-> true`)
console.log(`szam=-25->${ottelOszthato(-25)}`)



// rókarudi -> le se fut | hibás
//
}
