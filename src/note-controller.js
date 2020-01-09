(function(exports) {
  function NoteController(noteList) {
    noteList.addNote('Favourite drink: Seltzer');
    this.notesListView = new NotesListView(noteList);
  }

  NoteController.prototype.updateHTML = function(element = document.getElementById('app')) {
      element.innerHTML = this.notesListView.getHTMLString();
  }

  NoteController.prototype.getNoteById = function(id) {
    return this.notesListView.notesList.getById(id)
  }

  // NoteController.prototype.makeUrlChange = function() {
  //
  //
  // }


  exports.NoteController = NoteController;
})(this);
