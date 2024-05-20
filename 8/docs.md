# Online Bookstore Project

## Table of Contents

- [About](#about)
- [Usage](#usage)

## About <a name = "about"></a>

This project simulates an online bookstore system. It allows users to register, browse books, add books to their cart, and place orders. The system supports different types of books (fiction and non-fiction) and includes features such as availability tracking and order management with discount application.

## Usage <a name = "usage"></a>

### Classes

#### `Book`

Represents a book in the online bookstore.

**Constructor:**

```
new Book(title, author, isbn, price, availability)
```

- `title` (string): The title of the book.
- `author` (string): The author of the book.
- `isbn` (string): The ISBN of the book.
- `price` (number): The price of the book.
- `availability` (boolean): The availability status of the book.

### Getter Methods

- `get title()`: Retrieves the title of the book.
- `get author()`: Retrieves the author of the book.
- `get isbn()`: Retrieves the ISBN of the book.
- `get price()`: Retrieves the price of the book.
- `get availability()`: Retrieves the availability status of the book.

### Setter Methods

- `set title(title)`: Sets the title of the book.
- `set author(author)`: Sets the author of the book.
- `set isbn(isbn)`: Sets the ISBN of the book.
- `set price(price)`: Sets the price of the book.
- `set availability(availability)`: Sets the availability status of the book.

#### `FictionBook`

Represents a fiction book in the online bookstore, inherits from `Book`.

**Constructor:**

```
new FictionBook(title, author, isbn, price, availability)
```

### Getter Methods

- `get type()`: Retrieves the type of the book (always "Fiction").

#### `NonFictionBook`

Represents a non-fiction book in the online bookstore, inherits from `Book`.

**Constructor:**

```
new NonFictionBook(title, author, isbn, price, availability)
```

### Getter Methods

- `get type()`: Retrieves the type of the book (always "Non-Fiction").

#### `User`

Represents a user of the online bookstore.

**Constructor:**

```
new User(name, email, userId)
```

- `name` (string): The name of the user.
- `email` (string): The email address of the user.
- `userId` (string): The unique user ID of the user.

### Getter Methods

- `get name()`: Retrieves the name of the user.
- `get email()`: Retrieves the email address of the user.
- `get userId()`: Retrieves the unique user ID of the user.

### Setter Methods

- `set name(name)`: Sets the name of the user.
- `set email(email)`: Sets the email address of the user.
- `set userId(userId)`: Sets the unique user ID of the user.

#### `Cart`

Represents a shopping cart for a user in the online bookstore.

**Constructor:**

```
new Cart(user)
```

- `user` (User): The user this cart belongs to.

### Getter Methods

- `get user()`: Retrieves the user this cart belongs to.
- `get books()`: Retrieves the array of books in the cart.

### Setter Methods

- `set user(user)`: Sets the user this cart belongs to.
- `set books(books)`: Sets the array of books in the cart.

**Methods:**

- `addBook(book)`: Adds a book to the cart. If the book is not available, it will not be added.
- `removeBook(book)`: Removes a book from the cart. If the book is not in the cart, it will not be removed.
- `calculateTotal()`: Calculates the total price of all books in the cart.

#### `Order`

Represents an order placed by a user in the online bookstore.

**Constructor:**

```
new Order(user, books)
```

- `user` (User): The user who placed the order.
- `books` (Array<Book>): The array of books in the order.

### Getter Methods

- `get user()`: Retrieves the user who placed the order.
- `get books()`: Retrieves the array of books in the order.
- `get discount()`: Retrieves the discount applied to the order.
- `get totalPrice()`: Retrieves the total price of all books in the order.
- `get isPayed()`: Retrieves the payment status of the order.

### Setter Methods

- `set user(user)`: Sets the user who placed the order.
- `set books(books)`: Sets the array of books in the order.
- `set discount(discount)`: Sets the discount applied to the order.
- `set isPayed(isPayed)`: Sets the payment status of the order.

**Methods:**

- `calculateTotal()`: Calculates the total price of all books in the order, taking into account any discounts.
- `makeDiscount(discount)`: Applies a discount to the total price.
- `completePayment()`: Marks the order as paid.

### Example Usage

```
// Create new users
const user1 = new User("John Smith", "js@mail.com", 0);
const user2 = new User("Smith John", "js2@mail.com", 1);

// Create new books
const book1 = new Book("Harry Potter", "J K Rowling", "1", 20, true);
const fictionBook1 = new FictionBook("The Great Gatsby", "F. Scott Fitzgerald", "4", 15, true);
const nonFictionBook1 = new NonFictionBook("Sapiens", "Yuval Noah Harari", "6", 18, true);

// Users start shopping
const cart1 = new Cart(user1);

// Add books to the cart
cart1.addBook(book1);
cart1.addBook(fictionBook1);
cart1.addBook(nonFictionBook1);

// Check total price
console.log(cart1.calculateTotal());

// Create an order from the cart
const order1 = new Order(cart1.user, cart1.books);

// Apply a discount
order1.makeDiscount(50);
console.log(order1.totalPrice);

// Complete payment
order1.completePayment();
```
