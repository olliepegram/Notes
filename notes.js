const notes = [{
  title: 'My next trip',
  body: 'I would like to go to Spain'
}, {
  title: 'Habbits to work on',
  body: 'Exercise. Eating a bit better'
}, {
  title: 'Office modification',
  body: 'Get a new seat'
}];

const sortNotes = function (notes) {
  notes.sort(function(a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (b.title.toLowerCase()  < a.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  })
}

sortNotes(notes)
console.log(notes);

const findNote = function (notes, noteTitle) {
  const note = notes.find(function (note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  })
}

const findNotes = function (notes, query) {
  return notes.filter(function (note, index) {
    const isTitleMatched = note.title.toLowerCase().includes(query.toLowerCase());
    const isBodyMatched = note.body.toLowerCase().includes(query.toLowerCase());
    return isTitleMatched || isBodyMatched;
  })
}
// console.log(findNotes(notes, 'work'));

const note = findNote(notes, 'office modification');
// console.log(note);
