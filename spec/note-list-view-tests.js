(function() {
  var notesList;
  var notesListView;

  function setUp() {
    notesList = new NotesList();
    notesListView = new NotesListView(notesList);
  }

  function testHTMLString() {
    setUp();

    notesList.addNote("string1");
    notesList.addNote("string2");

    var html = notesListView.getHTMLString();
    var string = "<ul><li>string1</li><li>string2</li></ul>"

    assert.isTrue(html === string);
  };

  function testLongString() {
    setUp();

    notesList.addNote("Just random things; whatever you want it to be.");
    notesList.addNote("Random things that are a little different");

    var html = notesListView.getHTMLString();
    var string = "<ul><li>Just random things; </li><li>Random things that a</li></ul>";

    assert.isTrue(html === string);
  }

  testHTMLString();
  testLongString();
})();
