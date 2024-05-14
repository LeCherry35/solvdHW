/**
 * Represents a book in the online bookstore.
 * @class
 */
class Book {
  /**
   * Creates a new instance of Book.
   * @constructor
   * @param {string} title - The title of the book.
   * @param {string} author - The author of the book.
   * @param {string} isbn - The ISBN of the book.
   * @param {number} price - The price of the book.
   * @param {boolean} availability - The availability status of the book.
   */
  constructor(title, author, isbn, price, availability) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.price = price;
    this.availability = availability;
  }
}

/**
 * Represents a fiction book in the online bookstore.
 * @class
 */
class FictionBook extends Book {
  /**
   * Creates a new instance of FictionBook.
   * @constructor
   * @param {string} title - The title of the book.
   * @param {string} author - The author of the book.
   * @param {string} isbn - The ISBN of the book.
   * @param {number} price - The price of the book.
   * @param {boolean} availability - The availability status of the book.
   */
  constructor(title, author, isbn, price, availability) {
    super(title, author, isbn, price, availability);
    this.type = "Fiction";
  }
}

/**
 * Represents a non-fiction book in the online bookstore.
 * @class
 */
class NonFictionBook extends Book {
  /**
   * Creates a new instance of FictionBook.
   * @constructor
   * @param {string} title - The title of the book.
   * @param {string} author - The author of the book.
   * @param {string} isbn - The ISBN of the book.
   * @param {number} price - The price of the book.
   * @param {boolean} availability - The availability status of the book.
   */
  constructor(title, author, isbn, price, availability) {
    super(title, author, isbn, price, availability);
    this.type = "Non-Fiction";
  }
}

/**
 * Represents a User of the online bookstore.
 * @class
 */
class User {
  /**
   * Creates a new instance of User.
   * @constructor
   * @param {string} name - The name of the user.
   * @param {string} email - The email address of the user.
   * @param {string} userId - The unique user ID of the user.
   */
  constructor(name, email, userId) {
    this.name = name;
    this.email = email;
    this.userId = userId;
  }
}

/**
 * Represents a Cart for a user in the online bookstore.
 * @class
 */
class Cart {
  /**
   * Creates a new instance of Cart.
   * @constructor
   * @param {User} user - The user this cart belongs to
   */
  constructor(user) {
    this.user = user;
    this.books = [];
  }

  /**
   * Adds a book to the cart.
   * @param {Book} book - The book to add to the cart.
   */
  addBook(book) {
    if (book.availability) {
      this.books.push(book);
      book.availability = false;
      console.log(`${book.title} successfully added to the cart`);
    } else {
      console.log(`${book.title} book is not available`);
    }
  }

  /**
   * Removes a book from the cart.
   * @param {book} book - The book to remove.
   */
  removeBook(book) {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
      book.availability = true;
      console.log(`${book.title} removed from cart.`);
    } else {
      console.log(`${book.title} is not in the cart.`);
    }
  }

  /**
   * Calculates the total price of all books in the cart.
   * @returns {number} The total price of all books in the cart.
   */
  calculateTotal() {
    return this.books.reduce((prev, book) => prev + book.price, 0);
  }
}

/**
 * Represents an Order placed by a user in the online bookstore.
 * @class
 */
class Order {
  /**
   * Creates a new instance of Order.
   * @constructor
   * @param {User} user - The user who placed the order.
   * @param {Array<Book>} books - The array of books in the order.
   */
  constructor(user, books) {
    this.user = user;
    this.books = books;
    this.discount = 0;
    this.totalPrice = this.calculateTotal();
    this.isPayed = false;
  }

  /**
   * Calculates the total price of all books in the order.
   * @returns {number} The total price of all books in the order.
   */
  calculateTotal() {
    return (
      (this.books.reduce((total, book) => total + book.price, 0) *
        (100 - this.discount)) /
      100
    );
  }
  /**
   * Makes a discount and recalculates total price
   * @param {number} discount - Discount percantage
   */
  makeDiscount(discount) {
    this.discount = discount;
    this.totalPrice = this.calculateTotal();
  }
  /**
   * Changes order status to payed
   */
  completePayment() {
    this.isPayed = true;
  }
}

// Scenario

// new users are registered
const user1 = new User("John Smith", "js@mail.com", 0);
const user2 = new User("Smith John", "js2@mail.com", 1);
const user3 = new User("Ed Low", "js3@mail.com", 2);

//new books are available
const book1 = new Book("Harry Potter", "J K Rowling", "1", 20, true);
const book2 = new Book("Harry Potter 2", "J K Rowling", "2", 25, true);
const book3 = new Book("Harry Potter 3", "J K Rowling", "3", 30, true);
const fictionBook1 = new FictionBook(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  "4",
  15,
  true
);
const fictionBook2 = new FictionBook(
  "To Kill a Mockingbird",
  "Harper Lee",
  "5",
  12,
  true
);
const nonFictionBook1 = new NonFictionBook(
  "Sapiens",
  "Yuval Noah Harari",
  "6",
  18,
  true
);
const nonFictionBook2 = new NonFictionBook(
  "The Power of Habit",
  "Charles Duhigg",
  "7",
  14,
  true
);

//users starts shopping
const cart1 = new Cart(user1);
const cart2 = new Cart(user2);

//users browse books and add them to the cart, they can check total price at any moment
cart1.addBook(book1);
cart1.addBook(fictionBook1);
cart1.addBook(nonFictionBook1);
console.log(cart1.calculateTotal());
cart1.addBook(book3);

cart2.addBook(book2);
cart2.addBook(book1);
cart2.addBook(nonFictionBook2);
cart2.addBook(fictionBook2);

//when user is ready to checkout order is created using ingormation from cart
const order1 = new Order(cart1.user, cart1.books);
const order2 = new Order(cart2.user, cart2.books);

//user gets a discount of 50%
order1.makeDiscount(50)
console.log(order1.totalPrice);

//user pays for the order
order1.completePayment()

console.log(order2.totalPrice);
order2.completePayment()