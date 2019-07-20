//1. Buat masing-masing 2 contoh penggunaan if, if-else, if-else-if, if-else-if-else, dan if bersarang
//2. Buat 2 contoh penggunaan looping dgn while yg dikombinasikan dengan if-else
//3. Buat contoh penggunaan switch-case dan for-loop di javascript (sunnah ini mah)

//Semoga dilancarkan dengan bacaan bismillah

//Jawaban No. 1
//a. if
    //contoh 1
    var a = "Denny";
    var hasil = "Denny";
    if (a == hasil) {
        console.log("Benar "+hasil);
        console.log("/////////////////////////////////////////////////////////////////////");
    }

//contoh 2
    if (30 != 20) {
      console.log("Tiga Puluh Tidak Sama Dengan Dua Puluh");
      console.log("/////////////////////////////////////////////////////////////////////");
    }

//b. if - else
//contoh 1
    var anak = 1;
    var nama = "Sinta";

    if (anak == 1 && nama != "Sinta") {
        console.log("Anak Yang Ke " + anak + " Namanya "+ nama);
        console.log("/////////////////////////////////////////////////////////////////////");
    } else {
        console.log("Anak Dan Nama Tidak Sama");
        console.log("/////////////////////////////////////////////////////////////////////");
    }

//contoh 2
    var benda = "Lampu";

    if (benda == "Lampu") {
        console.log("Ini Lampu");
        console.log("/////////////////////////////////////////////////////////////////////");
    } else {
        console.log ("Bukan Lampu");
        console.log("/////////////////////////////////////////////////////////////////////");
    }

//c. if - else - if
//contoh 1
    var rentan = 58;

    if (rentan >= 86) {
        console.log("Rentan = 100 sampai dengan 86");
        console.log("/////////////////////////////////////////////////////////////////////");
    }else if (rentan >= 75) {
        console.log("Rentan = 75 sampai dengan 60");
        console.log("/////////////////////////////////////////////////////////////////////");
    }else if(rentan >= 60 || rentan >=50){
        console.log("Rentan = 60 sampai dengan 50");
        console.log("/////////////////////////////////////////////////////////////////////");
    }

//contoh 2
    var hubungan = "Rumit";

    if (hubungan != "Senang") {
        console.log("Senang");
        console.log("/////////////////////////////////////////////////////////////////////");
    } else if (hubungan = "Rumit") {
        console.log("Rumit");
        console.log("/////////////////////////////////////////////////////////////////////");
    }

//d. if - else - if - else
//contoh 1
    var gaji = 4000000;

    if (gaji > 3000000) {
        console.log("Gaji Anda Diatas 3 Juta");
        console.log("/////////////////////////////////////////////////////////////////////");
    }else if(gaji == 3000000){
        console.log("Gaji Anda Pas 3 Juta");
        console.log("/////////////////////////////////////////////////////////////////////");
    } else if (gaji < 3000000) {
        console.log("Gaji Anda Dibawah 3 Juta");
        console.log("/////////////////////////////////////////////////////////////////////");
    } else {
        console.log("Gaji Anda Tidak Ada");
        console.log("/////////////////////////////////////////////////////////////////////");
    }

//contoh 2
    var tgl = new Date();
    var ambil_jam = tgl.getHours();
    if (ambil_jam < 12) {
        console.log("Selamat Pagi");
        console.log("/////////////////////////////////////////////////////////////////////");
    } else if (ambil_jam < 18) {
        console.log("Selamat Sore");
        console.log("/////////////////////////////////////////////////////////////////////");
    } else if(ambil_jam <= 23) {
        console.log("Selamat Malam");
        console.log("/////////////////////////////////////////////////////////////////////");
    }

//e. if bersarang
//contoh 1
    var nama_depan = "Denny";
    var nama_belakang = "Septiady";

    if (nama_depan == "Denny") {
        if (nama_belakang == "Septiady") {
            console.log("Nama Belakang Anda Benar");
            console.log("/////////////////////////////////////////////////////////////////////");
        }else{
            console.log("Nama Belakang Anda Salah");
            console.log("/////////////////////////////////////////////////////////////////////");
        }
    } else {
        console.log("Nama Depan Bukan Denny");
        console.log("/////////////////////////////////////////////////////////////////////");
    }


//contoh 2
    var tahap1 = "Lulus";
    var tahap2 = "Lulus";
    var tahap3 = "Tidak Lulus";

    if (tahap1 == "Lulus") {
            console.log("Lulus Tahap 1");
            console.log("/////////////////////////////////////////////////////////////////////");
        if (tahap2 == "Lulus") {
            console.log("Lulus Tahap 2");
            console.log("/////////////////////////////////////////////////////////////////////");
            if (tahap3 == "Lulus") {
                console.log("Lulus Tahap 3");
                console.log("/////////////////////////////////////////////////////////////////////");
            }else{
                console.log("Tidak Lulus Tahap 3");
                console.log("/////////////////////////////////////////////////////////////////////");
            }
        }else{
            console.log("Tidak Lulus Tahap 2");
            console.log("/////////////////////////////////////////////////////////////////////");
        }
    } else {
        console.log("Tidak Lulus Tahap 1");
        console.log("/////////////////////////////////////////////////////////////////////");
    }
    
//Jawaban No. 2
//contoh 1
var catatan = "ingat";
var dataku = ['data 1','data 2','data 3'];
var hitung = 0;
while(hitung <= 4){
    if(hitung < dataku.length){
        console.log(dataku[hitung]);
    }else{
        console.log("Barisan Bukan Ambil Dari Data Ke : " + hitung);
        
    }
    hitung++;
    
}
console.log("/////////////////////////////////////////////////////////////////////");

//contoh 2
var percobaan = "Berhasil"; 
var kocak = ['Ayo','Mau','Ngapain','kwkwkw'];

if (percobaan == "Berhasil"){
    var angka = 0;
    while (angka < kocak.length){
        console.log(kocak[angka]);
        angka++;
    }
} else {
    console.log("Tidak Berhasil");
}
console.log("/////////////////////////////////////////////////////////////////////");

//Jawaban No. 3 (Sunnah)
//a. switch - case
var angka = 7;

switch (angka) {
    case 1:
        console.log("Angka Satu");
        break;
    case 2:
        console.log("Angka Dua");
        break;
    case 3:
        console.log("Angka Tiga");
        break;
    case 4:
        console.log("Angka Empat");
        break;
    default:
        console.log("Bukan angka 1 - 4");
        break; 
    }
    console.log("/////////////////////////////////////////////////////////////////////");
//b. For (Looping)
for(i = 1; i < 10; i++){
    console.log(i + ". Horee");
}
console.log("/////////////////////////////////////////////////////////////////////");