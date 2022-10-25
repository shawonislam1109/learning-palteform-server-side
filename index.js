const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors');
const crouse = require('./Data/CrouseCategory.json')



app.use(cors());
app.get('/', (req, res) => {
    res.send('yes this the connected')
})

app.get('/crouse_Data', (req, res) => {
    res.send(crouse)
})

app.listen(port, () => {
    console.log('yes i am here connected')
})