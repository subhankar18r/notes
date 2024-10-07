console.log("start");

const noteContainer = document.querySelector(".noteContainer");

function createNote(value = "") {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
    <textarea>${value}</textarea>
    <img onclick="deleteNote(this)" src="./images/delete.png"/>
  `;
  noteContainer.appendChild(note);
  note.querySelector("textarea").addEventListener("input", storeNotes);
  storeNotes();
}

function deleteNote(e) {
  e.parentElement.remove();
  storeNotes();
}

function storeNotes() {
  let notes = [];
  [...noteContainer.childNodes].forEach((e) => {
    const textarea = e.querySelector("textarea");
    notes.push(textarea.value);
  });
  localStorage.setItem("notes", JSON.stringify(notes));
}

function getNotes() {
  const notes = JSON.parse(localStorage.getItem("notes"));
  notes.forEach((x) => {
    createNote(x);
  });
}
getNotes();
