/////// Zadaniye 1 ///////

// Создать объект, описывающий автомобиль
//  (производитель, модель, год выпуска, средняя скорость),
//  и следующие функции для работы с этим объектом.


const obj = {
    brand: "Bmw",
    model: "X5",
    year: "2014",
    speed: 100,
};

document.getElementById("brand").innerHTML = "Марка - " + obj.brand;
document.getElementById("model").innerHTML = "Модель - " + obj.model;
document.getElementById("year").innerHTML = "Год - " + obj.year;
document.getElementById("speed").innerHTML = "Скорость - " + obj.speed + " км/ч";

let inpDistance = document.getElementById("inp-disstance");

document.getElementById("btn").addEventListener("click", () => {
    let distanceValue = +inpDistance.value;
    let fullhour = distanceValue / obj.speed;
    let resthour = Math.floor(fullhour / 5);
    document.getElementById("hour").innerHTML = "За " + (fullhour + resthour) + " часа(ов)";
    inpDistance.value = "";
});





/////// Zadaniye 2 ///////

// Создать объект, хранящий в себе отдельно числитель и зна
// менатель дроби, и следующие функции для работы с этим объ
// ектом.
//  1. 
// Функция сложения 2-х объектов-дробей.
//  2. Функция вычитания 2-х объектов-дробей.
//  3. Функция умножения 2-х объектов-дробей.
//  4. Функция деления 2-х объектов-дробей.
//  5. Функция сокращения объекта-дроби.



const obj2 = {
    topElement: 3,
    botElement: 6,
};

document.getElementById("topElem").innerHTML = obj2.topElement;
document.getElementById("botElem").innerHTML = obj2.botElement;

let plus = document.getElementById("plusRes");
let minus = document.getElementById("minusRes");
let umnoj = document.getElementById("umnojRes");
let delit = document.getElementById("delitRes");
let sokr = document.getElementById("sokrRes");

document.getElementById("plusBtn").addEventListener("click", () => {
    plus.innerHTML = obj2.topElement + obj2.botElement;
    minus.innerHTML = " ";
    umnoj.innerHTML = " ";
    delit.innerHTML = " ";
    sokr.innerHTML = " ";
});

document.getElementById("minusBtn").addEventListener("click", () => {
    minus.innerHTML = obj2.topElement - obj2.botElement;
    plus.innerHTML = " ";
    umnoj.innerHTML = " ";
    delit.innerHTML = " ";
    sokr.innerHTML = " ";
});

document.getElementById("umnojBtn").addEventListener("click", () => {
    umnoj.innerHTML = obj2.topElement * obj2.botElement;
    plus.innerHTML = " ";
    minus.innerHTML = " ";
    delit.innerHTML = " ";
    sokr.innerHTML = " ";
});

document.getElementById("delitBtn").addEventListener("click", () => {
    delit.innerHTML = obj2.topElement / obj2.botElement;
    plus.innerHTML = " ";
    minus.innerHTML = " ";
    umnoj.innerHTML = " ";
    sokr.innerHTML = " ";
});

document.getElementById("sokrBtn").addEventListener("click", () => {
    sokr.innerHTML = "1/2";
    plus.innerHTML = " ";
    minus.innerHTML = " ";
    umnoj.innerHTML = " ";
    delit.innerHTML = " ";
});





/////// Zadaniye 2 ///////

// Создать объект, описывающий время (часы, минуты, секун
//     ды), и следующие функции для работы с этим объектом.
//      1. 
//     Функция вывода времени на экран.
//      2. Функция изменения времени на переданное количество 
//     секунд.
//      3. Функция изменения времени на переданное количество 
//     минут.
//      4. Функция изменения времени на переданное количество 
//     часов.
//      Учтите, что в последних 3-х функциях, при изменении одной 
//     части времени, может измениться и другая. Например: если ко 
//     времени «20:30:45» добавить 30 секунд, то должно получиться 
//     «20:31:15», а не «20:30:75».


const obj3 = {
    hour: 19,
    minute: 59,
    second: 12,
}


document.getElementById("spanHour").innerHTML = obj3.hour;
document.getElementById("spanMinute").innerHTML = obj3.minute;
document.getElementById("spanSecond").innerHTML = obj3.second;

let inpHour = document.getElementById('inpHour');
let inpMinute = document.getElementById('inpMinute');
let inpSecond = document.getElementById('inpSecond');

let spanHour = document.getElementById('spanHour');
let spanMinute = document.getElementById('spanMinute');
let spanSecond = document.getElementById('spanSecond');

document.getElementById("btnHour").addEventListener("click", () => {
    obj3.hour = obj3.hour + (+inpHour.value);
    if (obj3.hour  > 23) {
        obj3.hour  = obj3.hour  - 24;
    }
    spanHour.innerHTML = obj3.hour;
});

document.getElementById("btnMinute").addEventListener("click", () => {

    obj3.minute = obj3.minute + (+inpMin.value);
    if (obj3.minute  > 59) {
        obj3.minute  = obj3.minute  - 60;
        obj3.hour = obj3.hour + 1;
    }
    if (obj3.hour  > 23) {
        obj3.hour  = obj3.hour  - 24;
    }

    spanMinute.innerHTML = obj3.minute;
    spanHour.innerHTML = obj3.hour;
});

document.getElementById("btnSecond").addEventListener("click", () => {

    obj3.second = obj3.second + (+inpSec.value);
    if (obj3.second  > 59) {
        obj3.second  = obj3.second  - 60;
        obj3.minute = obj3.minute + 1;;
    }
    if (obj.minute > 59) {
        obj3.minute  = obj3.minute  - 60;
        obj3.hour = obj3.hour + 1;
    }
    if (obj3.hour  > 23) {
        obj3.hour  = obj3.hour  - 24;
    }
    if(obj3.minute == 60) {
        obj3.minute = 0
    }
    spanMinute.innerHTML = obj3.minute;
    spanHour.innerHTML = obj3.hour;
    spanSecond.innerHTML = obj3.second;
});