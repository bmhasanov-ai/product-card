function showTemperature(city, temperature) {
  console.log(`Сейчас в ${city} температура - ${temperature} градусов по Цельсию`);
}

showTemperature("Казань", 28);

const speedOfLight = 299792458;

function checkSpeed(speed) {
  if (speed > speedOfLight) {
    console.log("Сверх световая скорость");
  } else if (speed < speedOfLight) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Световая скорость");
  }
}

checkSpeed(100000000);

const miskMusk = "Парфюм"
const miskMuskPrice = 1000;

function currentBudget(budget) {
  if (budget >= miskMuskPrice) {
    console.log(`${miskMusk} приобретён. Спасибо за покупку!`);
  } else {
    console.log(`Вам не хватает ${miskMuskPrice - budget}$, пополните баланс`);
  }
}

currentBudget(500);

function chekTime(hminute) {
  if (hminute >= 60) {
    console.log("Время вышло!");
  } else {
    console.log(`Осталось ${60 - hminute} минут`);
  }
}

chekTime(45);

const nameOfCity = "Медина";
const kiblah = "Кибла";
let myAge = 29;
