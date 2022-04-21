class Books { /* eslint-disable-line max-classes-per-file */
  constructor(array) { /* eslint-disable-line no-unused-vars */
    this.array = [];
  }
}

class Book { /* eslint-disable-line max-classes-per-file */
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const storage = new Books();
if (localStorage.Books) {
  storage.array = JSON.parse(localStorage.Books);
}

// populate local storage collection with user entries
const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
  const bookTitle = document.getElementById('title');
  const author = document.getElementById('author');
  if (!bookTitle.value || !author.value) {
    alert('Enter both book title and author please');
  } else {
    const book = new Book(bookTitle.value, author.value);
    storage.array.push(book);
    bookTitle.value = '';
    author.value = '';
    const stringData = JSON.stringify(storage.array);
    localStorage.setItem('Books', stringData);
    window.location.reload();
  }
});

// Display localStorage Books Collection entries
if (localStorage.Books) {
  for (let i = 0; i < JSON.parse(localStorage.Books).length; i += 1) {
    const ul = document.getElementById('bookShelf');
    const li = document.createElement('li');
    li.className = 'item';
    li.id = `${i}`;
    li.style.listStyle = 'none';
    const cont = document.createElement('div');
    cont.className = 'titleAuthor';
    const addTitle = document.createElement('p');
    addTitle.innerHTML = JSON.parse(localStorage.Books)[i].title;
    addTitle.innerHTML += ' by ';
    cont.appendChild(addTitle);
    const addAuthor = document.createElement('p');
    addAuthor.innerHTML = JSON.parse(localStorage.Books)[i].author;
    cont.appendChild(addAuthor);
    const rmvButton = document.createElement('button');
    rmvButton.innerHTML = 'Remove';
    rmvButton.id = `btn${i}`;
    rmvButton.className = 'rmv';
    li.appendChild(cont);
    li.appendChild(rmvButton);
    const hr = document.createElement('hr');
    li.appendChild(hr);
    ul.appendChild(li);
  }
}

// Remove books from collection and display
for (let i = 0; i < document.getElementsByClassName('rmv').length; i += 1) {
  const rmvButton = document.getElementById(`btn${i}`);
  const titleName = storage.array[i].title;
  const list = document.getElementById(`${i}`);
  rmvButton.addEventListener('click', () => {
    const filtered = storage.array.filter((Books) => Books.title !== titleName);
    const stringData = JSON.stringify(filtered);
    localStorage.setItem('Books', stringData);
    list.remove();
    window.location.reload();
  });
}

//onclick function List
function toggleList(){
  const wrapper = document.getElementById('wrapper');
  const addNew =  document.getElementById('addBook');
  const contact = document.getElementById('mainTitle');
  const anchor = document.getElementById('list');
  const anchorNew = document.getElementById('new');
  
  if (list === false) {
    list = true;
    wrapper.classList.toggle('hidden');
    addNew.classList.toggle('hidden');
    contact.classList.toggle('hidden');
    anchor.style.color = 'blue';
    anchorNew.style.color = 'black';
    return list;
  }
}

//onclick function Add New
let list = true;
function toggleAddNew(){
  const wrapper = document.getElementById('wrapper');
  const addNew =  document.getElementById('addBook');
  const contact = document.getElementById('mainTitle');
  const anchorList = document.getElementById('list');
  const anchorNew = document.getElementById('new');

  
  if (list === true) {
    list = false;
    wrapper.classList.toggle('hidden');
    addNew.classList.toggle('hidden');
    contact.classList.toggle('hidden');
    anchorList.style.color = 'black';
    anchorNew.style.color = 'blue';
    return list;
  }
}

// //onclick function contact
// function toggleContact() {
//   const info = document.getElementById('contact');
//   const anchorList = document.getElementById('list');
//   const anchorNew = document.getElementById('new');
//   const anchorCont = document.getElementById('cont');
//   const wrapper = document.getElementById('wrapper');
//   const addNew =  document.getElementById('addBook');

//   if (!list) {
//   ;
//   info.classList.toggle('hidden');
//   anchorList.style.color = 'black';
//   anchorNew.style.color = 'black';
//   anchorCont.style.color = 'blue';
//   wrapper.classList.toggle('hidden');
//   // addNew.classList.toggle('hidden');
//   // return addNew;
//   return list;
// }
// }

function displayDate(){
const date = document.getElementById('date')
date.innerHTML = Date();
console.log(date.innerHTML)
}
