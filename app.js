let myLibrary = [];

class Book {
  constructor(title, madeby, year){
    this.title = title;
    this.madeby = madeby;
    this.year = year;
  }
}

function addBookToLibrary() {
  // do stuff here
}
















// get form
const button = document.querySelector('.btn');
const title = document.querySelector('.title');
const madeby = document.querySelector('.madeby');
const year = document.querySelector('.year');
const newDiv = document.createElement('div');


button.addEventListener('click', addItem);

function addItem(e){
  let item;
  // const title = e.title.value;
  const  newItem  = new Book(title.value, madeby.value, year.value);
  // console.log(title.value);
  myLibrary.push(newItem);

  console.log(newItem);
  console.log(myLibrary);
  e.preventDefault();
}
