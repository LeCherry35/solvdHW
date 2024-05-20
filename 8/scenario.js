// Scenario

// New users are registered
const user1 = new User("John Smith", "js@mail.com", 0);
const user2 = new User("Smith John", "js2@mail.com", 1);
const user3 = new User("Ed Low", "js3@mail.com", 2);

// New books are available
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

// Users starts shopping
const cart1 = new Cart(user1);
const cart2 = new Cart(user2);

// Users browse books and add them to the cart, they can check total price at any moment
cart1.addBook(book1);
cart1.addBook(fictionBook1);
cart1.addBook(nonFictionBook1);
console.log(cart1.calculateTotal());
cart1.addBook(book3);

cart2.addBook(book2);
cart2.addBook(book1);
cart2.addBook(nonFictionBook2);
cart2.addBook(fictionBook2);

// When user is ready to checkout order is created using ingormation from cart
const order1 = new Order(cart1.user, cart1.books);
const order2 = new Order(cart2.user, cart2.books);

// User gets a discount of 50%
order1.makeDiscount(50)
console.log(order1.totalPrice);

// User pays for the order
order1.completePayment()

console.log(order2.totalPrice);
order2.completePayment()