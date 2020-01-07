(function () {
  
  var note = new Note("My favourite language is JavaScript");

  function testNoteText() {
    assert.isTrue(note.text === "My favourite language is JavaScript");
  };

  function testReturnText() {
    assert.isTrue(note.returnText() === "My favourite language is JavaScript");
  }

  function testId() {
    note = new Note("supercalifragilisticexpialidocious");

    var note2 = new Note("expialidocioussupercalifragilistic");

    assert.isTrue(note.id + 1 === note2.id);

  }

  testNoteText();
  testReturnText();
  testId();

})(this);