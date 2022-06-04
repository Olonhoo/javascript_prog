function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
Post.prototype.edit = function () {
    let edittext = prompt('Напишите текст')
    if (edittext != "") {
        this.text = edittext
    }
}

function AttachedPost(author, text, date, highlighted) {
    Post.call(this, author, text, date);
    this.highlighted = highlighted;
}
AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;
AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true
}

const attachedPost1 = new AttachedPost('denis', 'qq', 2022, false)
attachedPost1.makeTextHighlighted()