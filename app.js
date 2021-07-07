// ES5 Style
function Book(title, author, year){
  this.title = title;
  this.author = author;
  this.year = year;
}

// UI
function UI(){}

// Add book to list
UI.prototype.addBookToList = function(book){
  const list = document.querySelector('#book-list');
  // create tr element
  const row = document.createElement('tr');
  // Insert cols
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.year}</td>
  <td><a href="#" class="delete">X</a></td>
  `;

  list.appendChild(row);
  console.log(row);
}

// CLear FIelds
UI.prototype.clearFields = function(){
  document.querySelector('.title').value = '';
  document.querySelector('.madeby').value = '';
  document.querySelector('.year').value = '';
}

// Event Listener
document.querySelector('.form').addEventListener('submit',
 (e) => {
  // Get Forms
  const title = document.querySelector('.title').value,
        author = document.querySelector('.madeby').value,
        year = document.querySelector('.year').value;

  // Instantiate book
  const book = new Book(title,author,year);

  // Instantiate UI
  const ui = new UI();

  // Add book to list
  ui.addBookToList(book);

  // Clear FIlds
  ui.clearFields();

  console.log(book);
  e.preventDefault();
})