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

// Задание 8. Создать массив из объектов-книг

const books = [
  {
    title: "Война и мир",
    author: "Лев Толстой",
    year: 1869,
    coverColor: "brown",
    genre: "Роман"
  },
  {
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    year: 1866,
    coverColor: "grey",
    genre: "Роман"
  },
  {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967,
    coverColor: "yellow",
    genre: "Роман"
  },
  {
    title: "Сахих Бухари",
    author: "Мухаммад аль-Бухари",
    year: 870,
    coverColor: "blue",
    genre: "Научная литература"
  }
];

books.push({
  title: "Муфсидат",
  author: "Ибн аль-Каййим",
  year: 1340,
  coverColor: "red",
  genre: "Научная литература"
});


// Задание 9. Создать второй массив из объектов-книг объединить его с массивом из задания 8.

const islamBooks = [
  {
    title: "Фаваид",
    author: "Ибн аль-Каййим",
    year: 1341,
    coverColor: "black",
    genre: "Научная литература"
  },
  {
    title: "Аль-Вабиль ас-Сайиб",
    author: "Ибн аль-Каййим",
    year: 1342,
    coverColor: "black",
    genre: "Научная литература"
  },
  {
    title: "Болезнь и исцеление",
    author: "Ибн аль-Каййим",
    year: 1349,
    coverColor: "black",
    genre: "Научная литература"
  }
];

const allBooks = [...books, ...islamBooks];

// Задание 10. Создать новый массив с помощью map в котором добавиться ещё одно свойство

function getIsRare(rareBooks) {
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