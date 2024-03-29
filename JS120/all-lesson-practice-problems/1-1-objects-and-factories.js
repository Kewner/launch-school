function createBook(title, author, read = false) {
  return {
    title,
    author,
    read,

    getDescription() {
      return `${this.title} was written by ${this.author}. ` +
             `I ${this.read ? 'have' : "haven't"} read it.`;
    },

    readBook() {
      this.read = true;
    },
  };
}

const book1 = createBook('Mythos', 'Stephen Fry');
const book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
const book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse');

console.log(book1.getDescription());
// "Mythos was written by Stephen Fry. I haven't read it."

book1.readBook();
console.log(book1.getDescription());
// "Mythos was written by Stephen Fry. I have read it."
