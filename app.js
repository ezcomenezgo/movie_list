// required packages used in the project
const express = require('express')
const app = express()
const port = 3000

// require express-handlebars here
const exphbs = require('express-handlebars')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static engine
app.use(express.static('public'))

//routes setting
app.get('/', (req, res) => {
  res.render('index')
})

// start and listen on Express server
app.listen(port, () => {
  console.log(`It is running on http://hostlocal:${port}`)
})