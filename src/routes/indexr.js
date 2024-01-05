const path = require('path');
const {Router} = require('express');
const route = Router();

route.get('/', (req, res) => {
    const indexPath = path.join(__dirname,'index.html');
    res.sendFile(indexPath)
});

module.exports = route;