//Destrukturisasi Array
let buah = ["mangga", "pisang", "anggur"];

// lakukan destrukturisasi array
let [buah1, buah2, buah3] = buah;

console.log(buah1); // Output: mangga
console.log(buah2); // Output: pisang
console.log(buah3); // Output: anggur

// gunakan koma kosong untuk melewati element kedua dan keempat
let [namaDepan, , namaBelakang, , buku] = ["Joanne", "K", "Rowling", "pengarang", "Harry Potter"];

console.log(namaDepan); // Output: Joanne
console.log(namaBelakang); // Output: Rowling
console.log(buku); // Output: Harry Potter

//Tukar variable
let a = 10;
let b = 15;

// variabel tambahan sementara
let temp = a;
a = b; // nilai a sekarang adalah 15
b = temp; // nilai b sekarang adalah 10

//Dengan Destrukturisasi
let a = 10;
let b = 15

[a,b] = [b,a];
// nilai a sekarang adalah 15, dan nilai b adalah 10


//Destrukturisasi Objek
let orang = {
    nama: "Joko",
    umur: 22,
    sudahMenikah: false
};
  
//tanpa Destrukturisasi
let nama = orang.nama;
let umur = orang.umur;
let sudahMenikah = orang.sudahMenikah;
  
console.log(nama); // Output: Joko
console.log(umur); // Output: 22
console.log(sudahMenikah); // Output: false

//Dengan Destrukturisasi
let { nama, umur, statusMenikah } = orang;
  
console.log(nama); // Output: Joko
console.log(umur); // Output: 22
console.log(statusMenikah); // Output: undefined karena nama variabel dan properti berbeda

//Jika ingin nama variablenya berbeda dari nama properti
//Tambahkan titik dua
let { name: nama, age: umur } = orang;

console.log(nama); // Output: Joko
console.log(umur); // Output: 22

//Destrukturisasi Objek Bertingkat
let murid = {
    kelas: "12a",
    nama: ["ani", "yahya", "sinto"],
    prestasi: {
      olahraga: "juara 1",
      akademik: "juara 2"
    }
};
  
let {
  prestasi: { olahraga }
} = murid;
  
console.log(olahraga); // Output: juara 1
  