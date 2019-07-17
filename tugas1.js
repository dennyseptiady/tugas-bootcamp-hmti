//Tugas No.1

//Bollean
var status = "Nikah";
var nama = "Denny";
if(status == "Nikah" || nama == "Denny"){
    console.log("Maka : " + true);
}else{
    console.log("Maka : " + false);
}

//Array
var data_array = ['Data 1','Data 2','Data 3','Data 4'];
console.log(data_array);

//Object
var data_object = {
    id : 1,
    nama_barang : "Gas",
    stok : 20
};
console.log(data_object);

//Array Of Object
var data_array_of_object = [
    {
        id_object : 2,
        nama_object : "Nama Objek",
        data_object : data_object
    },
    {
        id_object : 3,
        nama_object : "Nama Objek 3",
        data_object : data_array
    }
];
console.log(data_array_of_object);

//Tugas No.2
var oke = [
    {
        name : "Denny Septiady",
        age : 20,
        gender : "Male"
    },
    {
        name : "Cehlsea P",
        age : 19,
        gender : "Fe Male"
    },
    {
        name : "Jone",
        age : 25,
        gender : "Male"
    }
];

var i = 0;

while(i < oke.length){
    var no = i+1;
    console.log("Ini Urutan Ke = " + no++ +" " + oke[i].name + " - " + oke[i].age + " - " + oke[i].gender);
    i++;
};