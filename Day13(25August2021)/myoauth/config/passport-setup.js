const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github').Strategy;
const keys = require('./keys');
const User =require('../models/user-model');
const mongoose = require('mongoose')

//here we take the user from callback function and grab info from user and stuff in cookie to send across browser
passport.serializeUser((user,done)=>{
    done(null,user.id);
});

//deserializing 
passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
    done(null,user);
    });
   
});

passport.use(
    new GoogleStrategy({
        // options for google strategy
        callbackURL:'/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret:keys.google.clientSecret
        //accessToken is used to access the users profile,mails
        //refreshtoken is cause the accesstoken expires after a while
        //profile is the one that brings back info from google
        //done fucntion is called after we are done with callback
    }, (accessToken,refreshToken,profile,done) => {
        // passport callback function
       // console.log("passport callback function fired");
    

        //check if user already exists in db
        User.findOne({googleId: profile.id}).then((currentUser) => {
            if(currentUser){
                // already have this user
                console.log('user is: ', currentUser);
                console.log("profile",profile);
                console.log("access token",accessToken);
               return  done(null,currentUser);
                
            } else {
                // if not, create user in our db
                new User({
                    googleId: profile.id,
                    username: profile.displayName,
                    provider: "google",
                  
                }).save().then((newUser) => {
                    
                    console.log('user is: ', newUser);
                    console.log("profile",profile);
                    console.log("access token",accessToken);
                    console.log('created new user: ', newUser);
                  //  console.log("resource token:",resourceToken);
                    done(null,newUser);
                    
                });
            }
        });
    })
);

