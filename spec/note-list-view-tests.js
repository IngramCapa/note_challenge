var notesListView = new NotesListView();
notesListView.notesList.addNote("string1");
notesListView.notesList.addNote("string2");


function testHTMLString(){

    var html = notesListView.getHTMLString();
    var string = "<ul><li>string1</li><li>string2</li></ul>"
    assert.isTrue(html === string);
};

testHTMLString();