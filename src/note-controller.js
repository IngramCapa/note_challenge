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

  NoteController.prototype.makeUrlChange = function() {
    window.addEventListener("hashchange", showNoteForCurrentPage);

      function showNoteForCurrentPage() {
        showNote(getNoteFromUrl(window.location))
      }

      function getNoteFromUrl(location) {
        var id = location.hash.slice(-1)
        return noteController.getNoteById(id);
      }

      function showNote(note) {
        document.getElementById("app").innerHTML = note.returnText();
      }
  }

  exports.NoteController = NoteController;
})(this);
