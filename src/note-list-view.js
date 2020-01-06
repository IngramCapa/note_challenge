function NotesListView() {
    this.notesList = new NotesList();
};


NotesListView.prototype.getHTMLString = function() {
    var string = "<ul>"
    this.notesList.notes.forEach(note => {
        string += `<li>${note}</li>`
    });
    return string + "</ul>"
};