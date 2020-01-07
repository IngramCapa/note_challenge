(function(exports) {
  function NoteController(noteList) {
    noteList.addNote('Favourite drink: Seltzer');
    this.noteListView = new NotesListView(noteList);
  }

  NoteController.prototype.updateHTML = function(element = document.getElementById('app')) {
    element.innerHTML = this.noteListView.getHTMLString();
  }

  exports.NoteController = NoteController;
})(this);

