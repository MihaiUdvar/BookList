// 1. HTML - Create the structure of the page 
// 2. CSS - style the elements to look like in the attached gif
// 3. JS :
// - Create 2 classes with corespondent constructors(class Book and class UI)

// - Book class( used for creating book objects)
// - UI class( methods only here: for add the book to the list, delete the book, validate the input show confirmation message boxes)


const form = document.getElementById('book-form');

// console.log(title, author, isbn, form );


class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }   
}
//console.log(Book);

class UI {
    addBookToList(book) {
		const list = document.getElementById('book-list');
        const row = document.createElement('tr');
        row.innerHTML = `<td>${book.title}</td>
                         <td>${book.author}</td>
                         <td>${book.isbn}</td>
                         <td><a href="#" class="delete">X<a></td>` ;
        list.appendChild(row);
        //console.log(row);
	}  
    clearfields(){
        title.value = "";
        author.value = "";
        isbn.value = "";
    }
    alertDiv(message, className){
        let messageDiv = document.querySelector('.messageDiv');
        messageDiv.innerHTML = `<h5 class="${className}" class="u-full-width">${message}</h5>`;
        console.log(messageDiv);

        setTimeout(function(){messageDiv.innerHTML="";}, 3000);
    }
     deleteBook = (target) => {
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }
}

// Event listeners
document.getElementById('btn').addEventListener('click', (e) =>{
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    const book = new Book(title, author, isbn);
    //console.log(book);
    const ui = new UI();
    if(title === '' || author ==='' || isbn === ''){
        ui.alertDiv('Please fill in all the inputs', 'error');
    }
    else{
        ui.addBookToList(book);
        ui.alertDiv('Book Added!', 'success');
        ui.clearfields();
    }   
});

document.getElementById('book-list').addEventListener('click', (e) =>{
    const ui = new UI(); 
    ui.deleteBook(e.target);
    
});

