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
    this._title = title;
    this._author = author;
    this._isbn = isbn;
    this._price = price;
    this._availability = availability;
  }

  /**
   * Gets the title of the book.
   * @returns {string} The title of the book.
   */
  get title() {
    return this._title;
  }

  /**
   * Sets the title of the book.
   * @param {string} title - The new title of the book.
   */
  set title(title) {
    this._title = title;
  }

  /**
   * Gets the author of the book.
   * @returns {string} The author of the book.
   */
  get author() {
    return this._author;
  }

  /**
   * Sets the author of the book.
   * @param {string} author - The new author of the book.
   */
  set author(author) {
    this._author = author;
  }

  /**
   * Gets the ISBN of the book.
   * @returns {string} The ISBN of the book.
   */
  get isbn() {
    return this._isbn;
  }

  /**
   * Sets the ISBN of the book.
   * @param {string} isbn - The new ISBN of the book.
   */
  set isbn(isbn) {
    this._isbn = isbn;
  }

  /**
   * Gets the price of the book.
   * @returns {number} The price of the book.
   */
  get price() {
    return this._price;
  }

  /**
   * Sets the price of the book.
   * @param {number} price - The new price of the book.
   */
  set price(price) {
    this._price = price;
  }

  /**
   * Gets the availability status of the book.
   * @returns {boolean} The availability status of the book.
   */
  get availability() {
    return this._availability;
  }

  /**
   * Sets the availability status of the book.
   * @param {boolean} availability - The new availability status of the book.
   */
  set availability(availability) {
    this._availability = availability;
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
    this._type = "Fiction";
  }
  /**
   * Gets the type of the book.
   * @returns {string} The type of the book.
   */
  get type() {
    return this._type;
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
    this._type = "Non-Fiction";
  }
  /**
   * Gets the type of the book.
   * @returns {string} The type of the book.
   */
  get type() {
    return this._type;
  }
}
