var notesList = new NotesList();
notesList.addNote("string1");
notesList.addNote("string2");

function testNotesArray() {
  assert.isTrue(Array.isArray(notesList.notes));
};

function addNote() {
  assert.isTrue(notesList.notes[0].returnText() === "string1");
  assert.isTrue(notesList.notes[1].returnText() === "string2");
};

function testReturnNotes() {
  notes = notesList.returnNotes();
  assert.isTrue(notes[0].returnText() === "string1")
  assert.isTrue(notes[1].returnText() === "string2")
}


testNotesArray();
addNote();
testReturnNotes()
