const router = require('express').Router()
const Messages = require('../models/message')

router.get('/getAllHistory/:name/:othername', async (req, res) => {
    try {
        // console.log('sdfsd')
        
        // const username = req.params.name.substring(1)
        // const otherusername = req.params.othername.substring(1)
        const params = req.params
        // console.log(req.params)
        
        // console.log(name, 'sd', othername)
        const username = req.params.name.substring(1)
        const otherusername = req.params.othername.substring(1)
        console.log(username)
        console.log("othername",otherusername)
        // console.log(username, req.params.name)
        // console.log(otherusername, req.params.othername)
        const result = {}
        // await Messages.find({from: username, to: otherusername}).select('msg timestamp to from').then((msg) => {
        //     console.log('from', msg)
        //     result.from = msg
        // })
        // await Messages.find({to: username, from: otherusername}).select('msg timestamp from to').then((msg) => {
        //     console.log('to', msg)
        //     result.to = msg
        // })
        // await Messages.find({to: username, from: otherusername},{from: username, to: otherusername}).select('msg timestamp to from').then((msg) => {
            await Messages.find({
                $or: [
                    {to: username, from: otherusername},{from: username, to: otherusername}
                ]
            }).select('msg timestamp to from').then((msg) => {
            // console.log('from', msg)
            result.data = msg
        })
        res.send(result)
    } catch(err) {
        res.send(err)
    }
})

router.post('/add', (req, res) => {
    try {
        const {msg, from, to, timestamp} = req.body
        
        const Message = Messages.create({
            msg,
            from,
            to,
            timestamp
        })
        Message.save()
        console.log('success')
    } catch(err) {
        res.send(err)
    }
})

module.exports = router
