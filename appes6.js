class Book {
  constructor(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

class UI {
  addBookToList(book){
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
  }

  showAllert(message, className){
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

  deleteBook(target){
  if(target.className === 'delete'){
    target.parentElement.parentElement.remove();
    }
  }

  clearFields(){
    document.querySelector('.title').value = '';
    document.querySelector('.madeby').value = '';
    document.querySelector('.year').value = '';
  }
}

class Store {
  static getBooks(){
    let books;
    if(localStorage.getItem('books') === null){
      let books = []
    }else{
      books = JSON.parse(localStorage.getItem('books')); 
    }

    return books;
  }

  static displayBooks(){
    const books = Store.getBooks();

    books.foreach((book) => {
      const ui = new UI;

      // Add book to UI
      ui.addBookToList(book);
    })

    
  }

  static addBook(){
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(){

  }
}

// DOM load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);


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

  // Add to locastore
  Store.addBook(book);

  ui.showAllert("Book Added!", 'success');

  // Clear FIlds
  ui.clearFields();
  }

  console.log('asf');
  e.preventDefault();
})

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', (e) => {
  const ui = new UI();

  ui.deleteBook(e.target);

  // SHOW MESSAGE
  ui.showAllert('Book Removed', 'success')
})