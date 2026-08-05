// Задание 3. Описать себя в виде объекта

const hasan = {
  name: "Булат",
  lastName: "Хасанов",
  email: "bmhasanov@gmail.com",
  work: "ООО Скайнет",
  profession: "Монтаж слаботочных систем",
  age: 29,
  country: "Россия",
  republic: "Татарстан",
  city: "Казань",
  relationshipStatus: "Женат"
}


// Заадание 4. Информация об автомобиле с добовлением объекта

const car = {
  brend: "Renault",
  model: "Logan",
  year: "2013",
  color: "red",
  transmission: "автомат"
}

car.owner = hasan;

// Задание 5. Создать функцию проверки наличия свойства максимальной скоростти

function addMaxSpeed(auto) {
  if (auto.maxSpeed === undefined) {
    auto.maxSpeed = 180;
  }
}

addMaxSpeed(car);

console.log(car);

// Задание 6. Вывести фунцию с объектом и его свойствами в консоль

function showProperty(object, property) {
  console.log(object[property])
}

showProperty(hasan, "name");

// Задание 7. Массив с названиями продуктов

const products = ["Молоко", "Хлеб", "Сыр", "Яйца", "Масло"];

// Задание 8. Массив с книгами

const book1 = {
  title: "Война и мир",
  author: "Лев Толстой",
  year: 1869,
  coverColor: "brown",
  genre: "Роман"
};

const book2 = {
  title: "Преступление и наказание",
  author: "Фёдор Достоевский",
  year: 1866,
  coverColor: "grey",
  genre: "Роман"
};

const book3 = {
  title: "Мастер и Маргарита",
  author: "Михаил Булгаков",
  year: 1967,
  coverColor: "yellow",
  genre: "Роман"
};

const book4 = {
  title: "Сахих Бухари",
  author: "Мухаммад аль-Бухари",
  year: 870,
  coverColor: "blue",
  genre: "Научная литература"
};

const book5 = {
  title: "Муфсидат",
  author: "Ибн-Каййим",
  year: 1340,
  coverColor: "red",
  genre: "Научная литература"
}
const books = [book1, book2, book3, book4];

books.push(book5)


// Задание 9. Ещё один массив с книгами и объединение с предыдущим массивом

const islamBook1 = {
  title: "Фаваид",
  author: "Ибн-Каййим",
  year: 1341,
  coverColor: "black",
  genre: "Научная литература"
}

const islamBook2 = {
  title: "Ваабиль",
  author: "Ибн-Каййим",
  year: 1342,
  coverColor: "black",
  genre: "Научная литература"
}

const islamBook3 = {
  title: "Болезнь и исцеление",
  author: "Ибн-Каййим",
  year: 1349,
  coverColor: "black",
  genre: "Научная литература"
}

const islamBooks = [islamBook1, islamBook2, islamBook3]

const allBooks = [...books, ...islamBooks]

// Задание 10. Создать новый массив с помощью map в котором добавиться ещё одно свойство

function addIsRare(rareBooks) {
  return rareBooks.map(function (book) {

    if (book.year > 2000) {
      book.isRare = true;
    } else {
      book.isRare = false;
    }

    return book;

  });
}

const updatedBooks = addIsRare(allBooks);

console.log(updatedBooks);