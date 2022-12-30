const express = require('express')
require('./db/config')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const userData = require('./db/User')

app.post('/register', async (req, resp) => {
    let data = new userData(req.body)
    let result = await data.save()
    result = result.toObject()
    delete result.password
    resp.send(result)
})

app.post('/login', async (req, resp) => {
    if (req.body.username && req.body.password) {
        let data = await userData.findOne(req.body).select('-password')
        if (data) {
            resp.send(data)
        } else {
            resp.send({ result: 'No User Found' })
        }
    }
    else {
        resp.send({ result: 'No User Found' })
    }
})

app.listen(5000)