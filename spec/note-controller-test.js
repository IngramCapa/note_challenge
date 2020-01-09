(function() {

  function setUp() {
    notesList = new NotesList();
    notesListView = new NotesListView(notesList);
  }

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
  setUp();
})();


function testHashchange() {
  setUp();
  let element = { innerHTML: 'unchanged' };
  let callCounter = 0;
  let fakeWindow = {
    addEventListener: function(type, func) {
      callCounter++;
      assert.isTrue(type === 'hashchange');
      func();
    }
  }
  noteController.setHashchangeCallback(fakeWindow, element);
  assert.isTrue(callCounter === 1);
  assert.isTrue(element.innerHTML === '<div>Favourite drink: Seltzer</div>');
}