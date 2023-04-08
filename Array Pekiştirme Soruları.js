//Pekiştirme Soruları

//1.Soru

let dizi = [2,5,8,11,15,17];

// Uygun dizi metotlarını kullanarak  yukarıda verilen dizinin elemanları içinde 10'dan büyük olan elemanların 5'er katından oluşan yeni bir dizi oluşturun. (sonuç [55, 75, 85] olmalı.)
let yeni = dizi.filter((x)=> x >10).map((x)=>x*5);
console.log(yeni)

//2.Soru

// Uygun dizi metotlarını kullanarak, yukarıdaki dizi için aşağıdaki şartları sağlayan myFunction fonksiyonunu yazın.
// Elemanların arasında 5'ten büyük olan olan bir eleman varsa konsola "Beşten büyük bir eleman mevcut." yoksa "5'ten büyük eleman mevcut değil." yazdır.
let array = [3,6,9,14,16];
function myFunction(array){
    array.some((x) => x>5) ?
    console.log("Beşten büyük bir eleman mevcut."):
    console.log("5'ten büyük eleman mevcut değil.")};
myFunction(array);

//3.soru

let arr = [2,3,4];

// Uygun dizi metodunu kullanarak yukarıda verilen dizinin elemanlarının çarpımının sonucunu (24) veren bir fonksiyon yazınız.

function carpım(a,b) {
    return a*b;
};
const sonuc= arr.reduce(carpım,1);
console.log(sonuc)