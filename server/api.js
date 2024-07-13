const express = require('express');
const cors = require('cors');

const data = require('./data')

const app = express()
const router = express.Router()
app.use(cors())

router.get('/api/data', (req, res) => {
    res.json({ data })
})

app.use(router)

app.listen(3010, () => {
    console.log('listening on 3010');
})