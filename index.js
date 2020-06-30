const express = require('express')

const app = express()



app.get('/', (req, res) => {
    res.send('my app = Hello world! ')
})

const PORT = 3000
app.listen(PORT, _=> {
    console.log('servidor rodando na porta 3000!')
})