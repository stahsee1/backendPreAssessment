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



    res.status(200).json({ "books": booksStored });
})

books.post('/', (req, res) => {
    let bookToStore = req.body;
    bookToStore.id = booksStored.length + 1;
    booksStored.push(bookToStore);

    res.status(201).json(bookToStore)
})

books.delete('/', (req, res) => {
    booksStored = [];
    res.sendStatus(204);
})

module.exports = books;