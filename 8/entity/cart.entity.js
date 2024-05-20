/**
 * * Represents a Cart for a user in the online bookstore.
 * @class
 */
class Cart {
  /**
   * Creates a new instance of Cart.
   * @constructor
   * @param {User} user - The user this cart belongs to
   */
  constructor(user) {
    this._user = user;
    this._books = [];
  }

  /**
   * Gets the user this cart belongs to.
   * @returns {User} The user this cart belongs to.
   */
  get user() {
    return this._user;
  }

  /**
   * Sets the user this cart belongs to.
   * @param {User} user - The new user this cart belongs to.
   */
  set user(user) {
    this._user = user;
  }

  /**
   * Gets the array of books in the cart.
   * @returns {Array<Book>} The array of books in the cart.
   */
  get books() {
    return this._books;
  }

  /**
   * Sets the array of books in the cart.
   * @param {Array<Book>} books - The new array of books in the cart.
   */
  set books(books) {
    this._books = books;
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
