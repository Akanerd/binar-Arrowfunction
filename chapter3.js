/**
 * Latihan soal logic
 * 
 * 1. Sebuah toko memberikan diskon 20% untuk pembelian DI ATAS SAMA DENGAN 100.000. 
 * Buatlah sebuah program yang menghitung total harga setelah diskon berdasarkan total belanja.
 * 
 * 2. Buatlah sebuah fungsi yang mengonversi setiap huruf vokal dalam sebuah string menjadi huruf besar.
 * febri => fEbrI
 * febri => fFbrJ
 * aiueo => bjvfp
 * 
 * 3. Buatlah sebuah fungsi yang menerima sebuah string dan mengembalikan sebuah string baru yang berisi karakter pertama dan terakhir dari string asli. 
 * Jika string asli kosong, maka fungsi tersebut harus mengembalikan string kosong.
 * Febrian Aditya => "Fa"
 * Ayam => "Am"
 * "" => "0"
* 
 * 4. Buatlah sebuah fungsi yang menerima dua parameter: sebuah string dan sebuah angka. 
 * Fungsi tersebut akan mengulang string sebanyak angka yang diberikan.
 * "febri", 3 => "febrifebrifebri"
 * "witro", 2 => "witrowitro"
 * 
 * 5. Buatlah sebuah fungsi bernama generateRandomNumber() yang menghasilkan angka acak dari 1 sampai 6 setiap kali dipanggil
 * 1, 2, 3, 4, 5, 6
 */
console.log("----------------------------------")
const countTotal = (shop) => {
    function check() {
        if (shop >= 100000) {
            let result = shop - (20/100 * shop)
            return result
        }else {
            return shop
        }
    }
    return check()
}
console.log("Hasil Total belanja setelah discount: " + countTotal(100000))


console.log("----------------------------------")
const checkVowel = (str) => {
    function check() {
        return str.toLowerCase().replace(/[aeiou]/g, function(l) {
           let result = String.fromCharCode(l.charCodeAt(0) + 1)
            // result1 = l.toUpperCase()
            return result
            return result1
          })
    }
    return check();
}
console.log("Hasil dari vowelWord :" + checkVowel('azzasafah'))


console.log("----------------------------------")
const takeWord = (str) => {
    function check() {
       let  result = str.slice(0, 1) + str.slice(-1)
        return result
    }
    return check();
}
console.log("Hasil dari first dan last word :" + takeWord('azzasafah'))


console.log("----------------------------------")
const repeatWord = (num,str) => {
    function check() {
        let result=''
        for (let i = 0; i < num; i++)  result += str
        return result
    }
    return check();
}
console.log("Hasil repeat word :" + repeatWord(2,'aku'))


console.log("----------------------------------")
const generateRandomNumber = () => {
    function check() {
        let result=''
        for (let i = 0; i < 6; i++)  result += Math.floor(Math.random() * 10)
        return result
    }
    return check();
}
console.log("Hasil generate random number :" + generateRandomNumber())
