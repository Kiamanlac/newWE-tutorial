const express = require('express')

const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express', words: ['EJS', 'is', '<span style="font-weight: bold">awesome</span>'] })
})

module.exports = router
