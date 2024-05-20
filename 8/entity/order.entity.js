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
    this._user = user;
    this._books = books;
    this._discount = 0;
    this._totalPrice = this.calculateTotal();
    this._isPayed = false;
  }
  /**
   * Gets the user who placed the order.
   * @returns {User} The user who placed the order.
   */
  get user() {
    return this._user;
  }

  /**
   * Sets the user who placed the order.
   * @param {User} user - The new user who placed the order.
   */
  set user(user) {
    this._user = user;
  }

  /**
   * Gets the array of books in the order.
   * @returns {Array<Book>} The array of books in the order.
   */
  get books() {
    return this._books;
  }

  /**
   * Sets the array of books in the order.
   * @param {Array<Book>} books - The new array of books in the order.
   */
  set books(books) {
    this._books = books;
    this._totalPrice = this.calculateTotal(); // Recalculate total price when books are updated
  }

  /**
   * Gets the discount applied to the order.
   * @returns {number} The discount applied to the order.
   */
  get discount() {
    return this._discount;
  }

  /**
   * Sets the discount applied to the order.
   * @param {number} discount - The new discount applied to the order.
   */
  set discount(discount) {
    this._discount = discount;
    this._totalPrice = this.calculateTotal(); // Recalculate total price when discount is updated
  }

  /**
   * Gets the total price of all books in the order.
   * @returns {number} The total price of all books in the order.
   */
  get totalPrice() {
    return this._totalPrice;
  }

  /**
   * Gets the payment status of the order.
   * @returns {boolean} The payment status of the order.
   */
  get isPayed() {
    return this._isPayed;
  }

  /**
   * Sets the payment status of the order.
   * @param {boolean} isPayed - The new payment status of the order.
   */
  set isPayed(isPayed) {
    this._isPayed = isPayed;
  }_
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
