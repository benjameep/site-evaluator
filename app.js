const express = require('express')
const audit = require('./auditor.js') 
const port = 3000


const app = express()
app.set('view engine', 'pug')
app.set('views','./views')

app.use(express.static('public'))


app.get('/', async function (req, res){

    const url = req.query.q
    // let report = {}

    // if(url){
    //     report = await audit(url)
    // }

    res.render('index', { url })
})


app.listen(port, () => console.log(`listening on port ${port}`))