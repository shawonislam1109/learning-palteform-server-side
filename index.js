const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;
const crouse = require('./Data/CrouseCategory.json');
const category = require('./Data/categoryDetails.json');

app.use(cors())

app.get('/', (req, res) => {
    res.send('yes this the connected')
})

app.get('/crouse_Data', (req, res) => {
    res.send(crouse)
})
app.get('/categoryData', (req, res) => {
    res.send(category);
})
app.get('/categoryData/:id', (req, res) => {
    const id = req.params.id;
    const categories = category.find(data => data.id == id);
    res.send(categories);
})
app.get('/crouse_Data/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const singleData = crouse.filter(data => data.id == id);
    res.send(singleData);
})

app.listen(port, () => {
    console.log('yes i am here connected')
})