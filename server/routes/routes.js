const router = require('express').Router();

console.log("in routes");
// definição da rotas
router.use('/api/user',require('../controller/user/userController'));
    
    
    


module.exports = router;