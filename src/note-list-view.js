(function(exports) {
  function NotesListView(notesList) {
    this.notesList = notesList;
  };


  NotesListView.prototype.getHTMLString = function() {
    var string = "<ul>"
    this.notesList.notes.forEach(note => {
      string += `<li>${note.substr(0, 20)}</li>`;
    });
    return string + "</ul>"
  };



  exports.NotesListView = NotesListView;
})(this);
