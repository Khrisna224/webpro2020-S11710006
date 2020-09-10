// Conditional
// if else 
let acc = 100
let grade

if (acc === 100){
    grade = 'SS'
}
else if(acc < 100 && acc >=95){
    grade = 'S'
}
else if(acc < 95 && acc >= 90){
    grade = 'A'
}
else if(acc < 90 && acc >= 80){
    grade = 'B'
}
else{
    grade = 'C'
}
console.log("Grade = "+grade);


// Switch
switch (grade) {
    case "SS":
        console.log("Perfect");
        break;
    case "S":
        console.log("Awesome");
        break;
    case "A":
        console.log("Great");
        break;
    case "B":
        console.log("Good");
        break;
        
    default:
        console.log("Bad");
        break;
}

// Looping
// For
for(let i=0; i<5; i++){
    console.log("loop for ke-"+(i+1))
}

const buku = {
    judul: "Harry Potter and The Philosopher's Stone",
    pengarang: "J. K. Rowling",
    tahun: 1997
 };

 //For/in
 for (x in buku) {
   console.log(x, ':', buku[x]);
 }

 const buku1 = ["Game of Thrones: A Song of Ice and Fire",  
   "Harry Potter and The Philosopher's Stone", 
   "Lord of The Rings: The Fellowship of The Ring"
];

// For/of
for (x of buku1) {
  console.log(x);
}

let i=1
while(i <=5){
    console.log("loop while ke-"+i);
    i++;
}

let j=1;
do {
  console.log("loop do-while ke-"+j);
  j++;
} while (j <= 5);

