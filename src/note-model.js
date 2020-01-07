(function (exports) {
    var noteIdCounter = 0;

    function Note(text) {
        this.text = text;
        this.id = noteIdCounter++;
    };

    Note.prototype.returnText = function () {
        return this.text;
    };

    exports.Note = Note;

})(this);