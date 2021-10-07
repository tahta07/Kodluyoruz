function askName(){
    const getName = prompt("İsminizi Giriniz")
    document.getElementById("myName").innerText = getName
}

function showTime(){
    let date = new Date()
let h = date.getHours()
let m = date.getMinutes()
let s = date.getSeconds()
let day = date.getDay()

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

h = h < 10 ? "0" + h : h;
m = m < 10 ? "0" + m : m;
s = s < 10 ? "0" + s : s;


let time = `${h}:${m}:${s} ${day}`
document.getElementById("myClock").innerText = time;
}

askName()
showTime()
