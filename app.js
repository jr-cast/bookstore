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
  anchor.style.color = 'blue';
  anchorNew.style.color = 'black';
  cont.style.color = 'black';
  footer.classList.remove('foot');
}

// onclick function Add New
function toggleAddNew() {  /* eslint-disable-line*/
  wrapper.classList.add('hidden');
  addNew.classList.remove('hidden');
  title.classList.add('hidden');
  contact.classList.add('hidden');
  anchor.style.color = 'black';
  anchorNew.style.color = 'blue';
  footer.classList.remove('foot');
  cont.style.color = 'black';
}

// onclick function contact
document.getElementById('cont').addEventListener('click', () => {
  contact.classList.remove('hidden');
  wrapper.classList.add('hidden');
  title.classList.add('hidden');
  addNew.classList.add('hidden');
  footer.classList.add('foot');
  anchor.style.color = 'black';
  anchorNew.style.color = 'black';
  cont.style.color = 'blue';
});
