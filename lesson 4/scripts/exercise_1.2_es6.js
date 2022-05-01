class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit() {
        let edittext = prompt('Напишите текст')
        if (edittext != "") {
            this.text = edittext
        }
    }
}

class AttachedPost extends Post {
    constructor(author, text, date, highlighted) {
        super(author, text, date);
        this.highlighted = highlighted;
    }
    makeTextHighlighted() {
        this.highlighted = true
    }
}

const attachedPost1 = new AttachedPost('denis', 'qq', 2022, false)
attachedPost1.makeTextHighlighted()