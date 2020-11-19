//initialize THE ROUTES
const router = require('express').Router();

//Use the router  and also getting the api response

router.get('/', (req, res)=>{
    res.json({
        status: 'this API works',
        message: 'Welcome to our first API'
    })
});

module.exports = router; // router is an express mudule