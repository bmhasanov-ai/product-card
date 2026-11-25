class Drink {
  #temperature;
  constructor(name, volume, price, temperature) {
    this.name = name;
    this.volume = volume;
    this.price = price;
    this.#temperature = temperature;
  }

  getInfo() {
    return `Drink: ${this.name}, Volume: ${this.volume}ml, Price: $${this.price}, Temperature: ${this.#temperature}°C`;
  }
  
  getTemperature() {
    return this.#temperature;
  }

  setTemperature(gradus) {
    this.#temperature = gradus;
  }

  #cookDrink() {
    console.log(`Готовьтья ${this.name}...`);
  }

  serveDrink() {
    this.#cookDrink();
    console.log(`Подаем ${this.name} при температуре ${this.#temperature}°C`);
  }
}


class Coffee extends Drink {
  constructor(name, volume, price, temperature, typeOfGrain, milkType) {
    super(name, volume, price, temperature);
    this.typeOfGrain = typeOfGrain;
    this.milkType = milkType;
  }

  getInfo() {
    return `${super.getInfo()}, Type of Grain: ${this.typeOfGrain}, Milk Type: ${this.milkType}`;


  }
}

const espresso = new Coffee("Espresso", 60, 180, 90, "Arabica", "None");

class Tea extends Drink {
  constructor(name, volume, price, temperature, typeOfTea, sugarAmount) {
    super(name, volume, price, temperature);
    this.typeOfTea = typeOfTea;
    this.sugarAmount = sugarAmount;
  }

  getInfo() {
    return `${super.getInfo()}, Type of Tea: ${this.typeOfTea}, Sugar Amount: ${this.sugarAmount} tsp`;
  }
  getTemperature() {
    return super.getTemperature();
  }
}

const greenTea = new Tea("Green Tea", 200, 120, 80, "Green", 1);


class Juice extends Drink {
  constructor(name, volume, price, temperature, fruitType, isFresh) {
    super(name, volume, price, temperature);
    this.fruitType = fruitType;
    this.isFresh = isFresh;
  }

  getInfo() {
    return `${super.getInfo()}, Fruit Type: ${this.fruitType}, Is Fresh: ${this.isFresh}`;
  }

  serveDrink() {
    super.serveDrink();
}
}
const orangeJuice = new Juice("Orange Juice", 250, 150, 10, "Orange", true);
orangeJuice.serveDrink();


class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location
  }
  getCafeInfo() {
    console.log(`Cafe: ${this.name}, Location: ${this.location}`);
  }

  orderDrink(drink) {
    console.log(`Ordering ${drink.name} from ${this.name}`);
    drink.serveDrink();
  }
}

const alKamar = new Cafe("Al Kamar", "Kazan");
alKamar.getCafeInfo();
alKamar.orderDrink(espresso);
