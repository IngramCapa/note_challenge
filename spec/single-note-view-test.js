(function() {
    function testSingleNote() {
        let text = "boop"
        let note = new Note(text);
        let singleNoteView = new SingleNoteView(note);

        assert.isTrue(singleNoteView.note === note);
    }

    function testHTMLString(){
        let text = "boop"
        let note = new Note(text);
        let singleNoteView = new SingleNoteView(note);

        let string = "<div>boop</div>"

        assert.isTrue(singleNoteView.getHTMLString() === string);

    };

    testSingleNote();
    testHTMLString();

})();