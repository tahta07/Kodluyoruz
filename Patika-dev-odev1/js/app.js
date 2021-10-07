// DOM elementlerinin seçilmesi ve değişkenlere atanması
const myName = document.getElementById("myName")
const myClock = document.getElementById("myClock")

// Sayfa yüklenirken Kullanıcıdan İsmini isteyip DOM'a yazan fonksiyon
function askName(){
    const getName = prompt("İsminizi Giriniz")
    myName.innerText= getName
}

function showTime(){

// Tarih ve gün bilgilerini alır
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let day = date.getDay()

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

//Gün bilgisine göre hangi gün olduğunu belirler

switch (day){
    case 1:
        day= "Pazartesi"
        break    
    case 2:
        day= "Salı"
        break
    case 3:
        day= "Çarşamba"
        break
    case 4:
        day= "Perşembe"
        break
    case 5:
        day= "Cuma"
        break
    case 6:
        day= "Cumartesi"
        break
    case 0:
        day= "Pazar"
        break
}

writeTime(h,m,s,day)

}

//DOM'a Saati ve Günü Yazar
function writeTime(h,m,s,day){
    let time = `${h}:${m}:${s} ${day}`
    myClock.innerText = time;
}

askName()
showTime()
