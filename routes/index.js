const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // res.send('Hello World');
    res.render('index');  // switch from send to render and 
                         // pass in the name of the view index.ejs
});

module.exports = router;