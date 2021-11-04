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
  constructor(bookName, authorName) {
    this.bookName = bookName;
    this.authorName = authorName;
  }
}

//FUNCTION THAT USES A CONSTRUCTOR
function addBookToLibrary(bookTitle, bookAuthor) {
  let newBook = new Books(bookTitle, bookAuthor);
  myLibrary.push(newBook);

  displayLibrary();
}

//GET THE INPUT VALUE FROM ID AND PASSING TO ANOTHER FUNCTION
function submitForm() {
  const form = document.querySelector("form");
  const inputTitle = document.querySelector("#formTitle");
  const inputAuthor = document.querySelector("#formAuthor");
  addBookToLibrary(inputTitle.value, inputAuthor.value);

  //CLEAR FORM
  form.reset();
}

//DISPLAY ADDED BOOKS USING ` `
function displayLibrary() {
  let content = "";

  myLibrary.forEach((item) => {
    content += `<div class="card-container">
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 id="cardName" class="card-title">
              Name: ${item.bookName}
            </h5>
            <h6 id="cardAuthor" class="card-subtitle">
              Author: ${item.authorName}
            </h6>
          </div>
          <button class="btn btn-danger">DELETE</button>
        </div>
      </div>`;
  });

  document.querySelector("#cardCollection").innerHTML = content;
}

// TODO:
// DELETE BUTTON,
// LOCAL STORAGE,
// TOGGLE READ STATUS
// CSS CLEAN UP
