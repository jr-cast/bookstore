
// Book Object
let Book = new Object();
// Books Collection
let Books = [];
if (localStorage.Books) {
  Books = JSON.parse(localStorage.Books);
}
// add books to collection and display them
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
  const bookTitle = document.getElementById('title');
  const author = document.getElementById('author');
  const book = Object.create(Book);
  book.title = bookTitle.value;
  book.author = author.value;
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  li.style.listStyle = 'none';
  li.id = document.getElementsByClassName('li').length;
  const addTitle = document.createElement('p');
  addTitle.innerHTML = book.title;
  const addAuthor = document.createElement('p');
  addAuthor.innerHTML = book.author;
  const rmvButton = document.createElement('button');
  rmvButton.innerHTML = 'Remove';
  rmvButton.className = 'rmv';
  rmvButton.id = document.getElementsByClassName('rmv').length;
    // remove created button if desired (from list and from local storage)
    rmvButton.addEventListener('click', () => {
      let filtered = Books.filter(Books => Books.title !== book.title);
      let stringData = JSON.stringify(filtered);
      localStorage.setItem('Books', stringData);
      li.remove();
    })
  
  const hr = document.createElement('hr')
  li.appendChild(addTitle);
  li.appendChild(addAuthor);
  li.appendChild(rmvButton);
  li.appendChild(hr);
  ul.appendChild(li);
  Books.push(book);
  bookTitle.value = author.value = '';
  let stringData = JSON.stringify(Books);
  localStorage.setItem('Books', stringData);
});

// Display localStorage Books Collection
if (localStorage.Books) {
for (let i = 0; i < JSON.parse(localStorage.Books).length; i++) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.id = `${i}`;
    li.style.listStyle = 'none';
    const addTitle= document.createElement('p');
    addTitle.innerHTML = JSON.parse(localStorage.Books)[i].title;
    li.appendChild(addTitle);
    const addAuthor = document.createElement('p');
    addAuthor.innerHTML = JSON.parse(localStorage.Books)[i].author;
    li.appendChild(addAuthor);
    const rmvButton = document.createElement('button');
    rmvButton.innerHTML = 'Remove';
    rmvButton.id = `btn${i}`;
    rmvButton.className = 'rmv';
    li.appendChild(rmvButton);
    const hr = document.createElement('hr')
    li.appendChild(hr);
    ul.appendChild(li);
}};

// remove books from collection and display
  for (let i = 0; i < document.getElementsByClassName('rmv').length; i++) {
    const rmvButton = document.getElementById(`btn${i}`);
    const titleName = Books[i].title;
    const list = document.getElementById(`${i}`);
    rmvButton.addEventListener('click', () => {
      let filtered = Books.filter(Books => Books.title !== titleName && Books.author !== author);
      let stringData = JSON.stringify(filtered);
      localStorage.setItem('Books', stringData);
      list.remove();
    })
  }






