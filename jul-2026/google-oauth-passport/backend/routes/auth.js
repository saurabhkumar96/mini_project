const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middlewares/isAuthenticated");
const passport = require("passport");
const User = mongoose.model("User");



router.get("/google", passport.authenticate("google", { scope: ['profile', 'email'] }));


router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }));


router.get("/user", (req,res)=>{
    if(req.user){
        return res.status(200).json({
            user:req.user
        })
    }
    return res.status(401).json({
        message:"Unauthorized"
    })
})


router.get("/logout", (req,res)=>{
    req.logout(()=>{
        req.session.destroy(()=>{
            res.clearCookie("connect.sid");
            res.redirect("http://localhost:5173");
        })
    })
})


router.get("/dashboard",isAuthenticated, (req, res) => {
    res.send("Google");
});

router.get("/logout", (req,res)=>{
    req.logout((err)=>{
        if(err){
            return next(err)
        }
        res.redirect("/");
    })
})

router.get("/login-failed", (req,res)=>{
    res.send("Login Failed");
})

module.exports = router;