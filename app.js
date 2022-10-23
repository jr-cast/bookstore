class BooksRack { /* eslint-disable-line max-classes-per-file */
  constructor() { /* eslint-disable-line no-unused-vars */
    this.Books = [];
  }

  UpdateRack() {
    if (localStorage.Books) {
      this.Books = JSON.parse(localStorage.Books);
    }
  }
}

class Book { /* eslint-disable-line max-classes-per-file */
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// populate local storage collection with user entries
const addBtn = document.getElementById('addBtn');
const bookTitle = document.getElementById('title');
const author = document.getElementById('author');
const storedBooks = new BooksRack();
storedBooks.UpdateRack();
let stringData = JSON.stringify(storedBooks.Books);

addBtn.addEventListener('click', () => {
  if (!bookTitle.value || !author.value) {
    alert('Enter both book title and author please');
  } else {
    const book = new Book(bookTitle.value, author.value);
    storedBooks.Books.push(book);
    bookTitle.value = '';
    author.value = '';
    stringData = JSON.stringify(storedBooks.Books);
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
  const titleName = storedBooks.Books[i].title;
  const list = document.getElementById(`${i}`);
  rmvButton.addEventListener('click', () => {
    const filtered = storedBooks.Books.filter((Books) => Books.title !== titleName);
    const stringData = JSON.stringify(filtered);
    localStorage.setItem('Books', stringData);
    list.remove();
    window.location.reload();
  });
}

// Date
const date = new Date();
document.getElementById('date').innerHTML = date;
const wrapper = document.getElementById('wrapper');
const addNew = document.getElementById('addBook');
const title = document.getElementById('mainTitle');
const anchor = document.getElementById('list');
const anchorNew = document.getElementById('new');
const contact = document.getElementById('contact');
const footer = document.getElementById('foot');
const cont = document.getElementById('cont');

// onclick function List
function toggleList() {  /* eslint-disable-line*/
  wrapper.classList.remove('hidden');
  addNew.classList.add('hidden');
  title.classList.remove('hidden');
  contact.classList.add('hidden');
  footer.classList.remove('foot');
}

// onclick function Add New
function toggleAddNew() {  /* eslint-disable-line*/
  wrapper.classList.add('hidden');
  addNew.classList.remove('hidden');
  title.classList.add('hidden');
  contact.classList.add('hidden');
  footer.classList.remove('foot');
}

// onclick function contact
document.getElementById('cont').addEventListener('click', () => {
  contact.classList.remove('hidden');
  wrapper.classList.add('hidden');
  title.classList.add('hidden');
  addNew.classList.add('hidden');
  footer.classList.add('foot');
});

if (!localStorage || localStorage.Books === '[]') {
  const booklist = document.getElementById('wrapper');
  const notice = document.createElement('p');
  notice.className = 'font-bold pt-64 text-center text-xl text-gray-500';
  notice.innerHTML = 'Please add a book to start your collection';
  booklist.appendChild(notice);
}
