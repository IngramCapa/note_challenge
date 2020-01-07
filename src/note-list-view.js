function NotesListView(notesList) {
    this.notesList = notesList;
};


NotesListView.prototype.getHTMLString = function() {
    var string = "<ul>"
    this.notesList.notes.forEach(note => {
        string += `<li>${note}</li>`
    });
    return string + "</ul>"
};
