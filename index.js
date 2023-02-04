

const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let books = [
    {
        "name": "Psycho",
        "author": "Koko",
    },
    {
        "name": "Hsycho",
        "author": "Koko",
    },
    {
        "name": "Jabka",
        "author": "Moko",
    },
];
let authors = [
    {
        "name": "Koko",
        "id": "1",
    },
    {
        "name": "Moko",
        "id": "2",
    },
];

app.get('/', (req, res) => {
    res.send('works');
});

app.get('/books', (req, res) => {
    res.json(books);
});

app.post('/book', (req, res) => {
    const book = req.body;

    // Output the book to the console for debugging
    console.log(book);
    books.push(book);

    res.send('Book is added to the database');
});

app.post('/login', (req, res) => {

    if (authors.map(a => a.name).includes(req.headers.authorname)) {
        res.send(books.filter(b => b.author == req.headers.authorname));
    } else {
        res.send('no');
    }



})


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))