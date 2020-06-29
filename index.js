const express = require('express')

const app = express()



app.get('/', (req, res) => {
    res.send('my app = Hello world! ')
})


app.listen(3000, _=> {
    console.log('servidor rodando na porta 3000!')
})