function NotesList() {
    this.notes = [];
};

NotesList.prototype.addNote = function (note) {
    this.notes.push(new Note(note));
};

NotesList.prototype.returnNotes = function() {
    return this.notes;
}
