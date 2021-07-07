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

// Show allert
UI.prototype.showAllert = function(message, className){
  // DIV
  const div = document.createElement('div');
  // Add className
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
  // Get parrent
  const container = document.querySelector('.container');
  const form = document.querySelector('.form');

  container.insertBefore(div, form);

  // timeout after 3sec
  setTimeout(() => {
    document.querySelector('.alert').remove();
  }, 3000);
}

// CLear FIelds
UI.prototype.clearFields = function(){
  document.querySelector('.title').value = '';
  document.querySelector('.madeby').value = '';
  document.querySelector('.year').value = '';
}

// DELETE Book
UI.prototype.deleteBook = function(target){
  if(target.className === 'delete'){
    target.parentElement.parentElement.remove();
  }
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

  // Validate
  if(title === '' || author === '' || year === ''){
    // Error alert
    ui.showAllert("Please fill in all fields", 'error');
  }else{
  // Add book to list
  ui.addBookToList(book);

  ui.showAllert("Book Added!", 'success');
  // Clear FIlds
  ui.clearFields();
  }


  e.preventDefault();
})

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', (e) => {
  const ui = new UI();

  ui.deleteBook(e.target);

  // SHOW MESSAGE
  ui.showAllert('Book Removed', 'success')
})