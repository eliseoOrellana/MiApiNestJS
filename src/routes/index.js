// rutas
const path = require('path');


const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    const indexPath = path.join(__dirname,'index.html');
    res.sendFile(indexPath)
});

module.exports = router;