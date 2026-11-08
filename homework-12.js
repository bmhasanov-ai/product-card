class Books {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getDetails() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
  }
}

class PublissingHouse extends Books {
  constructor(title, author, year, publisher) {
    super(title, author, year);
    this.publisher = publisher;
  }
  getDetails() {
    super.getDetails();
    console.log(`Publisher: ${this.publisher}`);
  }
}

const book1 = new Books("Фаваид","Ибн Кайим", 1500);
const book2 = new Books("Три основы", "Салих Аль-Фаузан", 2000);
const publisher1 = new PublissingHouse("Фаваид","Ибн Кайим", 1500, "Умма");
const publisher2 = new PublissingHouse("Три основы", "Салих Аль-Фаузан", 2000, "HIKMA");

book1.getDetails();
book2.getDetails();
publisher1.getDetails();
publisher2.getDetails();