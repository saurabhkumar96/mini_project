const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const dotenv = require("dotenv");
const User = require("./models/User");
dotenv.config();

const app = express();

app.use(
    session({
        secret: "secret",
        resave: true,
        saveUninitialized: true,
    })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

passport.use(   new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  async (accessToken, refreshToken, profile, done) => {
    // This is where you find or create a user in your database
    // For this example, we directly pass the profile object
    let user = await User.findOne({googleId: profile.id});

    if(!user){
        user = await User.create({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            picture: profile.photos[0].value
        })
    }
    done(null, profile);
  }
));

// 4. Serialize and Deserialize User for managing session persistence
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async(user, done) => {
    user = await User.findById(user.id);
    done(null, user.id);
});



const authRoutes = require("./routes/auth");

app.use("/auth", authRoutes);



module.exports = app;