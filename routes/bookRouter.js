const { Router } = require('express')
const bookRouter = Router()

bookRouter.get('/', (req,res) => res.send('All books'))
bookRouter.get('/:bookName', (req,res) => {
    const { bookName } = req.params
    res.send(`Bookname:${bookName}`)
})

module.exports = bookRouter