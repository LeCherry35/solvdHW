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
    this._name = name;
    this._email = email;
    this._userId = userId;
  }
  /**
   * Gets the name of the user.
   * @returns {string} The name of the user.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of the user.
   * @param {string} name - The new name of the user.
   */
  set name(name) {
    this._name = name;
  }

  /**
   * Gets the email address of the user.
   * @returns {string} The email address of the user.
   */
  get email() {
    return this._email;
  }

  /**
   * Sets the email address of the user.
   * @param {string} email - The new email address of the user.
   */
  set email(email) {
    this._email = email;
  }

  /**
   * Gets the unique user ID of the user.
   * @returns {string} The unique user ID of the user.
   */
  get userId() {
    return this._userId;
  }

  /**
   * Sets the unique user ID of the user.
   * @param {string} userId - The new unique user ID of the user.
   */
  set userId(userId) {
    this._userId = userId;
  }

}
