var notesList = new NotesList();
var notesListView = new NotesListView(notesList);

notesList.addNote("string1");
notesList.addNote("string2");


function testHTMLString(){
    var html = notesListView.getHTMLString();
    var string = "<ul><li>string1</li><li>string2</li></ul>"

    assert.isTrue(html === string);
};

testHTMLString();
