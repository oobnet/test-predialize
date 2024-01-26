const express = require('express') 
const router = express.Router()
const data = require('../clients.mock')
// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})


router.get('/',(req,res) => {
    return res.json({status: true})
})

router.get('/clients',(req,res) => {
    return res.json({status: true,data})
})

router.get('/clients/:id',(req,res) => {
    const {id} = req.params
    const result = data.find(resp => resp._id == id)
    let client = {}
    if(result) {
        client = result
    }

    return res.json({status: true,client})
})

module.exports = router
