const express = require('express').Router()

const routes = express


routes.get('/', (req, res) => {
    res.json({ msg: "Hello World" })

})


module.exports = routes