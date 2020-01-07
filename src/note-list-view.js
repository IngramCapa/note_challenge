(function(exports) {
  function NotesListView(notesList) {
    this.notesList = notesList;
  };


  NotesListView.prototype.getHTMLString = function() {
    var string = "<ul>"
    this.notesList.returnNotes().forEach(note => {
      string += `<li><a href='#notes/${note.id}'>${note.returnText().substr(0, 20)}</a></li>`;
    });
    return string + "</ul>"
  };



  exports.NotesListView = NotesListView;
})(this);
