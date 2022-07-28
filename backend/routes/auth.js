const express = require('express');
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'BugMa$terHere';


// ROUTE 1: Create a user using POST "/api/auth/createuser". No login required
router.post("/createuser",[
    body('name','Enter a valid name').isLength({min: 3}),
    body('email','Enter a valid email').isEmail(),
    body('password','Password must have 5 characters or more').isLength({min: 5})
], async (req,res)=>{
    
    let success=true;
    // if there are errors return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        success=false;
        return res.status(400).json({success: success, errors: errors.array() });
    }
    try{
    // check whether the user with this email exists already
    let user = await User.findOne({email: req.body.email});
    if(user){
        success=false;
        return res.status(400).json({success:success,error: "Sorry a user with this email already exits"});
    }

    const salt = await bcrypt.genSalt(10);
    let secPass = await bcrypt.hash(req.body.password,salt);

    // create user 
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
    });
    // .then(user => res.json(user))
    // .catch(err=>{console.log(err);
    // res.json({error: "Please enter a unique email",message: err.message})});


    const data = {
        user: {
            id: user.id
        }
    };
    const authToken = jwt.sign(data, JWT_SECRET);

    res.json({success,authToken});


    }catch(error){
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});


// ROUTE 2: authenticate a user "/api/auth/login". No login required 
router.post("/login",[
    body('email','Enter a valid email').isEmail(),
    body('password','Password cannot be blank').exists()
], async (req,res)=>{

    let success = true;
    // if there are errors return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        success=false;
        return res.status(400).json({ success: success,errors: errors.array() });
    }

    const {email,password} = req.body;
    try{
        let user = await User.findOne({email: email});
        if(!user){
            succcess=false;
            return res.status(500).json({success:success ,error: "Try logging in with correct credentials"});
        }

        const passwordCompare = await bcrypt.compare(password,user.password);
        if(!passwordCompare){
            success=false;
            return res.status(500).json({success:success, error: "Try logging in with correct credentials"});
        }

        const data = {
            user: {
                id: user.id
            }
        };
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({success,authToken});
    }catch(error){
        console.error(error.message);
        res.status(500).send("Internal server error");
    }

});

// ROUTE 3: Get logged in user details using: POST "/api/auth/getuser". login required
router.post("/getuser", fetchuser, async (req,res)=>{
    try {
        let userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});




module.exports = router;