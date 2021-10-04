const express = require('express');
const books = express();
const preExistingBooks = require('./preExistingBooks.json');

booksStored = [];

books.get('/', (req, res) => {
    booksStored.sort( (a,b) => {
        if ( a.title < b.title )
            return -1
        else if ( a.title >= b.title)
            return 1
    })
    console.log("GET - \n", booksStored)
    res.status(200).json({ "books": booksStored });
})

books.post('/', (req, res) => {
    let bookToStore = req.body;
    bookToStore.id = booksStored.length + 1;
    booksStored.push(bookToStore);

    console.log("POST - \n", bookToStore);
    res.status(201).json(bookToStore)
})

books.delete('/', (req, res) => {
    booksStored = [];
    console.log("DELETE \n")
    res.sendStatus(204);
})

module.exports = books;