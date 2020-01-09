(function(exports) {
  function NotesList() {
      this.notes = [];
  };

  NotesList.prototype.addNote = function (note) {
      this.notes.push(new Note(note));
  };

  NotesList.prototype.returnNotes = function() {
      return this.notes;
  }

  NotesList.prototype.getById = function(id) {
    var arr = this.notes.filter(note => note.id == id)
    return arr[0]
  }

  exports.NotesList = NotesList;

})(this);
