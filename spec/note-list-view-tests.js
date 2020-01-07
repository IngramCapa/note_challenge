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

    var id1 = notesList.returnNotes()[0].id;
    var id2 = notesList.returnNotes()[1].id;

    var html = notesListView.getHTMLString();
    var string = `<ul><li><a href='#notes/${id1}'>string1</a></li><li><a href='#notes/${id2}'>string2</a></li></ul>`

    assert.isTrue(html === string);
  };

  function testLongString() {
    setUp();

    notesList.addNote("Just random things; whatever you want it to be.");
    notesList.addNote("Random things that are a little different");

    var id1 = notesList.returnNotes()[0].id;
    var id2 = notesList.returnNotes()[1].id;

    var html = notesListView.getHTMLString();
    var string = `<ul><li><a href='#notes/${id1}'>Just random things; </a></li><li><a href='#notes/${id2}'>Random things that a</a></li></ul>`;

    assert.isTrue(html === string);
  }

  testHTMLString();
  testLongString();
})();
