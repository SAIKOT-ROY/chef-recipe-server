const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chef = require('./data/chef.json')
const food = require('./data/food.json')


app.use(cors());

app.get('/', (req, res) => {
    res.send(chef)
});

app.get('/chef', (req, res) => {
    res.send(chef)
})

app.get('/food', (req, res) => {
    res.send(food)
})


app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const chefsBio = chef.find(c => c.id == id)
    res.send(chefsBio)
})

app.listen(port, () => {
    console.log(`Assignment pera dei ${port}`);
})