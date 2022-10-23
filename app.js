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
    ul.className = 'flex flex-col justify-center items-center bg-slate-200';
    const li = document.createElement('li');
    li.className = 'item border-b-2 p-6 border-slate-500 m-1 w-full flex flex-col justify-between bg-gray-100 rounded-lg hover:bg-blue-100 lg:flex-row lg:justify-between lg:items-center';
    li.id = `${i}`;
    li.style.listStyle = 'none';
    const cont = document.createElement('div');
    cont.className = 'titleAuthor flex w-full p-4 text-xl justify-center lg:w-1/2';
    const addTitle = document.createElement('p');
    addTitle.className = 'font-bold text-md flex pt-1 pr-1';
    addTitle.innerHTML = JSON.parse(localStorage.Books)[i].title;
    addTitle.innerHTML += ' by';
    cont.appendChild(addTitle);
    const addAuthor = document.createElement('p');
    addAuthor.className = 'font-bold text-xl pt-1';
    addAuthor.innerHTML = JSON.parse(localStorage.Books)[i].author;
    cont.appendChild(addAuthor);
    const rmvButton = document.createElement('button');
    rmvButton.innerHTML = 'Remove';
    rmvButton.id = `btn${i}`;
    rmvButton.className = 'rmv bg-blue-500 hover:bg-blue-700 px-4 py-2 text-white rounded shadow-md shadow-slate-400 text-sm lg:w-1/3';
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
const contact = document.getElementById('contact');
const footer = document.getElementById('foot');

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
