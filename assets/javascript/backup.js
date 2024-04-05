// Variablen bestimmen
var verse = document.getElementById("verse");
var headline_texte = document.getElementById("headline_texte");
var texte = document.getElementById("texte");


// Datum von Heute
var d = new Date();

let day = d.getDate()+0;
let month = d.getMonth()+1;
let year = d.getFullYear();

document.getElementById("day").innerHTML = day;
document.getElementById("year").innerHTML = year;

if(month === 1){
    document.getElementById("month").innerHTML = "Januar";
    document.querySelector("body").style.backgroundImage = "url(january.jpg)";
    document.querySelector(".backgImage").style.setProperty("--backgImage","url('january.jpg')");
    document.querySelector("#calendarBirthday").setAttribute("src","january.jpg");
}
if(month === 2){
    document.getElementById("month").innerHTML = "Februar";
    document.querySelector("body").style.backgroundImage = "url(february.jpg)";
}
if(month === 3){
    document.getElementById("month").innerHTML = "März";
    document.querySelector("body").style.backgroundImage = "url(march.jpg)";
}
if(month === 4){
    document.getElementById("month").innerHTML = "April";
    document.querySelector("body").style.backgroundImage = "url(april.jpg)";
}
if(month === 5){
    document.getElementById("month").innerHTML = "Mai";
    document.querySelector("body").style.backgroundImage = "url(may.jpg)";
}
if(month === 6){
    document.getElementById("month").innerHTML = "Juni";
    document.querySelector("body").style.backgroundImage = "url(june.jpg)";
}
if(month === 7){
    document.getElementById("month").innerHTML = "Juli";
    document.querySelector("body").style.backgroundImage = "url(july.jpg)";
}
if(month === 8){
    document.getElementById("month").innerHTML = "August";
    document.querySelector("body").style.backgroundImage = "url(august.jpg)";
}
if(month === 9){
    document.getElementById("month").innerHTML = "September";
    document.querySelector("body").style.backgroundImage = "url(september.jpg)";
}
if(month === 10){
    document.getElementById("month").innerHTML = "Oktober";
    document.querySelector("body").style.backgroundImage = "url(october.jpg)";
}
if(month === 11){
    document.getElementById("month").innerHTML = "November";
    document.querySelector("body").style.backgroundImage = "url(november.jpg)";
}
if(month === 12){
    document.getElementById("month").innerHTML = "Dezember";
    document.querySelector("body").style.backgroundImage = "url(december.jpg)";
}

// Schaltjahr ausrechnen
const date = new Date(year, 0, 1);
const nextYear = year + 1;
const nextYearDate = new Date(nextYear,0,1);

const diff = nextYearDate - date;
const oneDay = 1000*60*60*24;

const result = diff / oneDay;

console.log(`Das Jahr ${year} hat ${result} Tage.`);

// Tage ausrechnen
janauryday = 31;
if(result === 365){
    februaryday = 28+janauryday;
}
if(result === 366){
    februaryday = 29+janauryday; 
}
marchday = 31+februaryday;
aprilday = 30+marchday;
mayday = 31+aprilday;
juneday = 30+mayday;
julyday = 31+juneday;
augustday = 31+julyday;
septemberday = 30+augustday;
octoberday = 31+septemberday;
novemberday = 30+octoberday;
decemberday = 31+novemberday;

console.log(februaryday);


// Januar
if(month === 1){
    janauryday = day;

    console.log(janauryday);
}
if(janauryday === 1){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(janauryday === 2){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(janauryday === 3){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(janauryday === 4){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(janauryday === 5){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(janauryday === 6){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(janauryday === 7){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(janauryday === 8){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(janauryday === 9){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(janauryday === 10){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(janauryday === 11){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(janauryday === 12){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(janauryday === 13){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(janauryday === 14){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(janauryday === 15){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(janauryday === 16){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(janauryday === 17){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(janauryday === 18){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(janauryday === 19){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(janauryday === 20){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(janauryday === 21){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(janauryday === 22){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(janauryday === 23){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(janauryday === 24){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(janauryday === 25){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(janauryday === 26){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(janauryday === 27){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(janauryday === 28){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(janauryday === 29){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(janauryday === 30){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(janauryday === 31){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}

// Februar
if(month === 2){
    februaryday = janauryday+day;

    console.log(februaryday);
}
if(februaryday === 32){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(februaryday === 33){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(februaryday === 34){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(februaryday === 35){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(februaryday === 36){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(februaryday === 37){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(februaryday === 38){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(februaryday === 39){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(februaryday === 40){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(februaryday === 41){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(februaryday === 42){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(februaryday === 43){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(februaryday === 44){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(februaryday === 45){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(februaryday === 46){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(februaryday === 47){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(februaryday === 48){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(februaryday === 49){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(februaryday === 50){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(februaryday === 51){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(februaryday === 52){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(februaryday === 53){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(februaryday === 54){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(februaryday === 55){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(februaryday === 56){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(februaryday === 57){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(februaryday === 58){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(februaryday === 59){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(februaryday === 60 && result === 366){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}

// März
if(month === 3){
    console.log(marchday);
    marchday = februaryday+day;
}
if(marchday === 61){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(marchday === 62){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(marchday === 63){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(marchday === 64){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(marchday === 65){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(marchday === 66){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(marchday === 67){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(marchday === 68){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(marchday === 69){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(marchday === 70){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(marchday === 71){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(marchday === 72){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(marchday === 73){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(marchday === 74){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(marchday === 75){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(marchday === 76){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(marchday === 77){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(marchday === 78){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(marchday === 79){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(marchday === 80){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(marchday === 81){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(marchday === 82){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(marchday === 83){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(marchday === 84){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(marchday === 85){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(marchday === 86){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(marchday === 87){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(marchday === 88){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(marchday === 89){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(marchday === 90){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(marchday === 91){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}

// April
if(month === 4){
    aprilday = marchday+day;

    console.log(aprilday);
}
if(aprilday === 92){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(aprilday === 93){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(aprilday === 94){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(aprilday === 95){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(aprilday === 96){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(aprilday === 97){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(aprilday === 98){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(aprilday === 99){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(aprilday === 100){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(aprilday === 101){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(aprilday === 102){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(aprilday === 103){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(aprilday === 104){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(aprilday === 105){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(aprilday === 106){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(aprilday === 107){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(aprilday === 108){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(aprilday === 109){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(aprilday === 110){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(aprilday === 111){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(aprilday === 112){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(aprilday === 113){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(aprilday === 114){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(aprilday === 115){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(aprilday === 116){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(aprilday === 117){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(aprilday === 118){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(aprilday === 119){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(aprilday === 120){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(aprilday === 121){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}

// Mai
if(month === 5){
    mayday = aprilday+day;

    console.log(mayday);
}
if(mayday === 122){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(mayday === 123){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(mayday === 124){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(mayday === 125){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(mayday === 126){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(mayday === 127){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(mayday === 128){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(mayday === 129){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(mayday === 130){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(mayday === 131){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(mayday === 132){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(mayday === 133){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(mayday === 134){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(mayday === 135){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(mayday === 136){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(mayday === 137){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(mayday === 138){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(mayday === 139){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(mayday === 140){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(mayday === 141){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(mayday === 142){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(mayday === 143){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(mayday === 144){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(mayday === 145){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(mayday === 146){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(mayday === 147){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(mayday === 148){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(mayday === 149){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(mayday === 150){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(mayday === 151){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(mayday === 152){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}

// Juni
if(month === 6){
    juneday = mayday+day;

    console.log(juneday);
}
if(juneday === 153){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(juneday === 154){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(juneday === 155){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(juneday === 156){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(juneday === 157){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(juneday === 158){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(juneday === 159){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(juneday === 160){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(juneday === 161){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(juneday === 162){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(juneday === 163){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(juneday === 164){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(juneday === 165){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(juneday === 166){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(juneday === 167){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(juneday === 168){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(juneday === 169){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(juneday === 170){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(juneday === 171){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(juneday === 172){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(juneday === 173){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(juneday === 174){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(juneday === 175){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(juneday === 176){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(juneday === 177){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(juneday === 178){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(juneday === 179){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(juneday === 180){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(juneday === 181){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(juneday === 182){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}

// July
if(month === 7){
    julyday = juneday+day;

    console.log(julyday);
}
if(julyday === 183){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(julyday === 184){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(julyday === 185){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(julyday === 186){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(julyday === 187){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(julyday === 188){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(julyday === 189){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(julyday === 190){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(julyday === 191){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(julyday === 192){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(julyday === 193){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(julyday === 194){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(julyday === 195){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(julyday === 196){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(julyday === 197){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(julyday === 198){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(julyday === 199){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(julyday === 200){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(julyday === 201){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(julyday === 202){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(julyday === 203){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(julyday === 204){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(julyday === 205){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(julyday === 206){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(julyday === 207){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(julyday === 208){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(julyday === 209){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(julyday === 210){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(julyday === 211){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(julyday === 212){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(julyday === 213){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}

// August
if(month === 8){
    augustday = julyday+day;

    console.log(augustday);
}
if(augustday === 214){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(augustday === 215){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(augustday === 216){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(augustday === 217){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(augustday === 218){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(augustday === 219){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(augustday === 220){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(augustday === 221){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(augustday === 222){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(augustday === 223){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(augustday === 224){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(augustday === 225){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(augustday === 226){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(augustday === 227){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(augustday === 228){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(augustday === 229){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(augustday === 230){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(augustday === 231){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(augustday === 232){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(augustday === 233){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(augustday === 234){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(augustday === 235){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(augustday === 236){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(augustday === 237){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(augustday === 238){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(augustday === 239){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(augustday === 240){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(augustday === 241){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(augustday === 242){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(augustday === 243){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(augustday === 244){
    verse.innerHTML = "";
}

// September
if(month === 9){
    septemberday = augustday+day;

    console.log(septemberday);
}
if(septemberday === 245){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(septemberday === 246){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(septemberday === 247){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(septemberday === 248){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(septemberday === 249){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(septemberday === 250){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(septemberday === 251){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(septemberday === 252){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(septemberday === 253){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(septemberday === 254){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(septemberday === 255){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(septemberday === 256){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(septemberday === 257){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(septemberday === 258){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(septemberday === 259){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(septemberday === 260){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(septemberday === 261){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(septemberday === 262){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(septemberday === 263){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(septemberday === 264){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(septemberday === 265){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(septemberday === 266){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(septemberday === 267){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(septemberday === 268){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(septemberday === 269){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(septemberday === 270){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(septemberday === 271){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(septemberday === 272){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(septemberday === 273){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(septemberday === 274){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}

// Oktober
if(month === 10){
    octoberday = septemberday+day;

    console.log(octoberday);
}
if(octoberday === 275){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(octoberday === 276){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(octoberday === 277){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(octoberday === 278){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(octoberday === 279){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(octoberday === 280){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(octoberday === 281){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(octoberday === 282){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(octoberday === 283){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(octoberday === 284){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(octoberday === 285){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(octoberday === 286){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(octoberday === 287){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(octoberday === 288){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(octoberday === 289){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(octoberday === 290){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(octoberday === 291){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(octoberday === 292){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(octoberday === 293){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(octoberday === 294){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(octoberday === 295){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(octoberday === 296){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(octoberday === 297){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(octoberday === 298){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(octoberday === 299){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(octoberday === 300){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(octoberday === 301){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(octoberday === 302){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(octoberday === 303){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(octoberday === 304){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(octoberday === 305){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}


// November
if(month === 11){
    novemberday = octoberday+day;

    console.log(novemberday);
}
if(novemberday === 306){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 307){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 308){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 309){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 309){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 310){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 311){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 312){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 313){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 314){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 315){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 316){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 317){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 318){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 319){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 320){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 321){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 322){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 323){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 324){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 325){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 326){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 327){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 328){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 329){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 330){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 331){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 332){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 333){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 334){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}

// Dezember
if(month === 12){
    decemberday = novemberday+day;

    console.log(decemberday);
}
if(decemberday === 335){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 336){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 337){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 338){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 339){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 340){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 341){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 342){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 343){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 344){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 345){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 346){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 347){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 348){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 349){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 350){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 351){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 352){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 353){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 354){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 355){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 356){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 357){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 358){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 359){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 360){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 361){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 362){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 363){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 364){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 365){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}

// Uhrzeit

var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();

if(h < 10){
    document.getElementById("hour").innerHTML = "0"+h;
}
if(h>=10){
    document.getElementById("hour").innerHTML = h;
}
if(m < 10){
    document.getElementById("minute").innerHTML = "0"+m;
}
if(m>=10){
    document.getElementById("minute").innerHTML = m;
}

document.getElementById("second").innerHTML = s;




// console.log(s);

function clock(){
    s++;
    if(s == 60){
        s = 0;
        m++;
    }
    if(m == 60){
        m = 0;
        h++;
    }
    if(h == 24){
        h = 0;
        window.location.reload(false);
    }

    if(m<10){
        document.getElementById("minute").innerHTML = "0"+m;
    }
    if(m>=10){
        document.getElementById("minute").innerHTML = m;
    }
    if(h<10){
    document.getElementById("hour").innerHTML = "0" + h;
    }
    if(h>=10){
        document.getElementById("hour").innerHTML = h;
    }
    document.getElementById("second").innerHTML = s;
    // console.log(s);
}
setInterval(clock,1000);

// Tagesname
var dayname = d.getDay();

// console.log(dayname);

if(dayname == 0){
    document.getElementById("dayname").innerHTML = "Sonntag";
}
if(dayname == 1){
    document.getElementById("dayname").innerHTML = "Montag";
}
if(dayname == 2){
    document.getElementById("dayname").innerHTML = "Dienstag";
}
if(dayname == 3){
    document.getElementById("dayname").innerHTML = "Mittwoch";
}
if(dayname == 4){
    document.getElementById("dayname").innerHTML = "Donnerstag";
}
if(dayname == 5){
    document.getElementById("dayname").innerHTML = "Freitag";
}
if(dayname == 6){
    document.getElementById("dayname").innerHTML = "Samstag";
}

// Timer bis meinem Geburtstag wenn ein Monat vorher
var birthdayYear = 2024;

var myBirthday = new Date(birthdayYear,8,5);
console.log(myBirthday);

var differenz = myBirthday - d;

var days = Math.floor(differenz / (1000*60*60*24));
var hours = Math.floor((differenz / (1000*60*60)) - (days * 24));
var minutes = Math.floor((differenz/(1000*60)) - ((days * (24*60))+(hours * 60)));
minutes = minutes + 1;
var seconds = Math.floor((differenz/1000) - ((days * (24*60*60)) + (hours * (60*60)) + ((minutes * 60))-60));
seconds = seconds + 1;

var Days = document.getElementById("days");
var Hours = document.getElementById("hours");
var Minutes = document.getElementById("minutes");
var Seconds = document.getElementById("seconds");
Seconds.innerHTML = seconds;
Minutes.innerHTML = minutes;
Hours.innerHTML = hours
Days.innerHTML = days;


function countdown(){
    seconds--;
    if(seconds < 0){
        seconds=59;
        minutes--;
    }
    if(minutes < 0){
        minutes=59;
        hours--;
    }
    if(hours < 0){
        hours=23;
        days--;
    }
    if(days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0){
        seconds = 0;
        minutes = 0;
        hours = 0;
        days = 0;
        clearInterval(intervallCountdown);
    }

    if(seconds<10){
        Seconds.innerHTML = "0"+seconds;
    }else{
        Seconds.innerHTML = seconds;
    }
    if(minutes<10){
        Minutes.innerHTML = "0"+minutes;
    }else{
        Minutes.innerHTML = minutes;
    }
    if(hours<10){
        Hours.innerHTML = "0"+hours;
    }else{
        Hours.innerHTML = hours;
    }

}
var intervallCountdown = setInterval(countdown,1000);


// Scroll to Right
document.addEventListener('wheel', function(event) {
    if(event.deltaX < 0) {
        scrollleft();
    }else if(event.deltaX > 0) {
        scrollright();
    }
});

document.addEventListener("keydown", function(event){
    if(event.code == "ArrowLeft"){
        scrollleft();
    }else if(event.code == "ArrowRight"){
        scrollright();
    }
})

function scrollright(){
    let windowWidth = window.innerWidth * 2;
    window.document.documentElement.scrollLeft += windowWidth;
}
function scrollleft(){
    let windowWidth = window.innerWidth * 2;
    window.document.documentElement.scrollLeft -= windowWidth;
}

function test(username, date,id){
    return{username,date,id};
}

// let array = [
//     test("hallo1","12", 1),
//     test("hallo2","23", 2),
//     test("hallo3","14", 3),
//     test("hallo4","06", 4)
// ];

// console.log(array);

// let hey = array[2];

// console.log(hey);

// array.forEach(element => {
//     console.log(element.username + "<->" + element.date + "<->" + element.id);
// });