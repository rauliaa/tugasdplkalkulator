const input = require("readline-sync");
console.log("=====================================");
console.log("Kalkulator Sederhana");
console.log("=====================================");

const a = input.questionInt("Masukkan nilai pertama : ");
const b = input.questionInt("Masukan nilai kedua : ");
const nilai1 = Number(a);
const nilai2 = Number(b);

console.log("=====================================");
console.log("1. Penjumlahan (+)");
console.log("2. Pengurangan (-)");
console.log("3. Perkalian (*)");
console.log("4. Pembagian (/)");
const pilih = input.questionInt("Pilihlah salah satu nomor di atas ini: ");
console.log("=====================================");

if (pilih == 1){
    console.log("Hasil dari " + nilai1 + (" ") + ("+") + (" ") + nilai2 + (" adalah"))
    hasil = nilai1 + nilai2
    
}else if (pilih == 2){
    console.log("Hasil dari " + nilai1 + (" ") + ("-") + (" ") + nilai2 + (" adalah"))
    hasil = nilai1 - nilai2
    
}else if (pilih == 3){
    console.log("Hasil dari " + nilai1 + (" ") + ("*") + (" ") + nilai2 + (" adalah"))
    hasil = nilai1 * nilai2
    
}else if (pilih == 4){
    console.log("Hasil dari " + nilai1 + (" ") + ("/") + (" ") + nilai2 + (" adalah"))
    hasil = nilai1 / nilai2
}

console.log(hasil)
console.log("=====================================");
