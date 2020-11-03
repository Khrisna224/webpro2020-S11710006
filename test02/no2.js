//1
const warnaKesukaan = ((warna = "putih") => console.log(`Warna kesukaan saya adalah ${warna}`))

warnaKesukaan("merah");

//2
let namaBuah1 = ['apel', 'mangga'];
let namaBuah2 = ['sirsak', 'semangka'];

let semuaNamaBuah;

semuaNamaBuah = [...namaBuah1, ...namaBuah2];

console.log(semuaNamaBuah);