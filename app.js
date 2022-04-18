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
  let li = document.createElement('li');
   const addTitle= document.createElement('p');
   const addAuthor = document.createElement('p');
   const addbutton = document.createElement('button');
   const hr = document.createElement('hr')
   
   li.appendChild(addTitle,addAuthor,addButton,hr)
console.log (li)


      
  console.log('click')
  books[2] = {
    title: bookTitle.value,
    author: author.value
  }
});

for(let i = 0; i < removeBtns.length; i++) {
  removeBtns[i].addEventListener('click', () => {
    
    // let titleBook = document.getElementById(`title${i}`).innerHTML;
    // let writer = document.getElementById(`author${i}`).innerHTML;
    delete books[i]
    // delete books[i].author
     // console.log(title);
    console.log(books)
  })
}


