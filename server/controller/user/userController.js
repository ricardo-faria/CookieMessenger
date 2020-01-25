const router = require('express').Router();
const User = require('../../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth");

//create new user route 
router.post('/register', function(req, res){
    let password=  bcrypt.hashSync(req.body.password, 10);
    console.log("in register userControlle");

    User.create({
            email: req.body.email,
            name: req.body.name,
            password: password,
            registred_at: new Date()
        }, function(err, user){
            if (err){
                return handleError(err);
            }else{ 
                let token = genereteToken(user.id);
                res.send({token});
            }
        });         
}); 

//login route
router.post('/login', (req, res)=>{
    User.findOne({email: req.body.email}, function(err, user){
        if (!user){
            res.send({message: 'usuario não encontrado'})
        }else{
            bcrypt.compare(req.body.password, user.password, function(err, ok){
                if (err)
                    res.send('falha nno login')
                if (!ok){
                    res.statusCode = 401;
                    res.send({message: 'credenciais incorretas'});
                }else{
                   let token = genereteToken(user.id);
                   res.send({token});
                }
            });
        }
    });     
});

// generete authentication token
function genereteToken(id){
    let token= jwt.sign({id : id},authConfig.secret,{
        expiresIn: 86400
    });
    return token
}

module.exports = router;