const books = [
  {
    title: 'First Book Title',
    author: 'Test Book1 Author'
  },
  {
    title: 'Second Book Title',
    author: 'Test Book2 Author'
  },
];

let bookTitle = document.getElementById('title');
let author = document.getElementById('author');
let addBtn = document.getElementById('addBtn');
let removeBtns = document.getElementsByClassName('rmv');


addBtn.addEventListener('click', () => {
  console.log('click')
  books[2] = {
    title: bookTitle.value,
    author: author.value
  }
});

for (let i = 0; i < removeBtns.length; i++) {
  removeBtns[i].addEventListener('click', () => {
    let title = document.getElementById(' title1').innerHTML;
    console.log(title);
  })
}