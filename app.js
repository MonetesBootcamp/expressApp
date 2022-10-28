const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello Worlda!')
})

app.listen(port, () => {
    console.log(`Aplicació de exemple que escolta el port ${port}`)
})