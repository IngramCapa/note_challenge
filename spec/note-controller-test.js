(function() {
  function testConstructor() {
    let noteList = new NotesList();
    let noteController = new NoteController(noteList);

    assert.isTrue(noteList.notes[0] === 'Favourite drink: Seltzer');
  }

  function testInnerHTMLChange() {
    let noteList = new NotesList();
    let noteController = new NoteController(noteList);

    let element = { innerHTML: 'unchanged' };

    noteController.updateHTML(element);

    assert.isTrue(element.innerHTML = '<ul><li>Favourite drink: Seltzer</li></ul>');
  }

  testConstructor();
  testInnerHTMLChange();
})();
