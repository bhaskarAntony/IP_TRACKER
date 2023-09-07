const express = require('express')
const ipinfo = require('ipinfo')
const app = express()
const port = 3000;

const cors = require('cors')


//middleware
// app.use(express.static('..frontend'))
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(express.json()) 
app.get('/ip/:address', async (req, res) =>{
    try {
        const {address} = req.params.address
        const info = await ipinfo(address)
        res.json({iplocation:info})
    } catch (error) {
        res.status(500).json({error:"internal server error"})
    }
})

app.listen(port, ()=>{
    console.log(`server is started at http://localhost:${port}`)
})