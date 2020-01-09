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
    return this.notes[id].get();
  }

  exports.NotesList = NotesList;

})(this);
