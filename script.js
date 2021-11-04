var myLibrary = [];

//CREATE A POPUP FORM BY TOGGLING THE ID STLYE.DISPLAY BETWEEN NONE & BLOCK TYPES.
document.getElementById("myForm").style.display = "none";

function openForm() {
  if (document.getElementById("myForm").style.display === "none") {
    document.getElementById("myForm").style.display = "block";
  } else {
    closeForm();
  }
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

//CONSTRUCTOR
class Books {
  constructor(bookID, bookName, authorName) {
    this.bookID = bookID;
    this.bookName = bookName;
    this.authorName = authorName;
  }
}

//FUNCTION THAT USES A CONSTRUCTOR
function addBookToLibrary(bookID, bookTitle, bookAuthor) {
  let newBook = new Books(bookID, bookTitle, bookAuthor);
  myLibrary.push(newBook);

  displayLibrary();
}

//GET THE INPUT VALUE FROM ID AND PASSING TO ANOTHER FUNCTION
function submitForm() {
  const form = document.querySelector("form");
  const randID = Date.now();
  const inputTitle = document.querySelector("#formTitle");
  const inputAuthor = document.querySelector("#formAuthor");
  addBookToLibrary(randID, inputTitle.value, inputAuthor.value);

  //CLEAR FORM
  form.reset();
}

//DISPLAY ADDED BOOKS USING ` `
function displayLibrary() {
  let content = "";

  myLibrary.forEach((item) => {
    content += `<div class="card-container">
        <div class="card cardLayout" style="width: 18rem">
          <div class="card-body">
            <h5 id="cardName" class="card-title">
              Name: ${item.bookName}
            </h5>
            <h6 id="cardAuthor" class="card-subtitle">
              Author: ${item.authorName}
            </h6>
          </div>
          <button class="btn btn-danger" onClick="deleteBook(${item.bookID})">DELETE</button>
        </div>
      </div>`;
  });

  document.querySelector("#cardCollection").innerHTML = content;
}

function deleteBook(e) {
  //MAP THE ARRAY OBJECT, SEARCH BOOKID AND RETRIEVE THE IT'S INDEX
  let getIndex = myLibrary
    .map(function (search) {
      return search.bookID;
    })
    .indexOf(e);

  myLibrary.splice(getIndex, 1);
  displayLibrary();
}

// TODO:
// LOCAL STORAGE,
// TOGGLE READ STATUS
// CSS CLEAN UP
