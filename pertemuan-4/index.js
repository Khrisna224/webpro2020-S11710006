//Materi javascript
//variabel
//operator
//Array
//Object
//Fungsi
//Javascript Conditional
//Javascript loop

// console.log("Indonesia");

// let name = "Mikoto-";
// let umur = 21;
// umur = 23;
// const age = 30;
// let rank = 10978;
// let playing = true;

// console.log("Hi "+ name);
// console.log(rank);

// console.log(typeof(name));
// console.log(typeof(name, rank, playing));
// //typeof untuk mengetahui tipe data

// let angka= 5
// angka **= 2;
// console.log(angka);

// //Ternary operator
// let makanan = "daging";
// let jenisHewan = makanan === "daging"  ? "karnivora" : "herbivora";
// console.log(jenisHewan);


//Function

let a = 8;
let b = 3;

alert("a = " + a + "\nb = "+b);
alert("penjumlahan 2 bujur sangkar = "+penjumlahanDuaBujurSangkar(a,b));
console.log(tambah(kali(2,4),kali(1,3)));

function penjumlahanDuaBujurSangkar(a,b){
    return a*a + b*b;
}

function tambah (a,b){
    return a+b;
}
function kali (a,b){
    return a*b;
}
