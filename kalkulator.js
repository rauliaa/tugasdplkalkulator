var panggiluntukinput = require("readline-sync");
console.log("Kalkulator Sederhana");
console.log("1. Penjumlahan (+)");
console.log("2. Pengurangan (-)");
console.log("3. Perkalian (*)");
console.log("4. Pembagian (/)");
var pilih = panggiluntukinput.questionInt("Pilihlah salah satu nomor di atas ini: ");

if (pilih == 1){
    var a = panggiluntukinput.questionInt("Masukkan nilai pertama: ");
    var b = panggiluntukinput.questionInt("Masukkan nilai kedua: ");
    var nilai1 = Number(a);
    var nilai2 = Number(b);
    hasil = nilai1 + nilai2
    console.log(hasil);
}else if (pilih == 2){
    var a = panggiluntukinput.questionInt("Masukkan nilai pertama: ");
    var b = panggiluntukinput.questionInt("Masukkan nilai kedua: ");
    var nilai1 = Number(a);
    var nilai2 = Number(b);
    hasil = nilai1 - nilai2
    console.log(hasil);
}else if (pilih == 3){
    var a = panggiluntukinput.questionInt("Masukkan nilai pertama: ");
    var b = panggiluntukinput.questionint("Masukkan nilai kedua: ");
    var nilai1 = Number(a);
    var nilai2 = Number(b);
    hasil = nilai1 * nilai2
    console.log(hasil);
}else if (pilih == 4){
    var a = panggiluntukinput.questionInt("Masukkan nilai pertama: ");
    var b = panggiluntukinput.questionInt("Masukkan nilai kedua: ");
    var nilai1 = Number(a);
    var nilai2 = Number(b);
    hasil = nilai1 / nilai2
    console.log(hasil);
}
