const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login', (req, res) => {
    res.render('login', { user: req.user });
});

// auth logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/'); //redirects to home page
})

// auth with google+
router.get('/google', passport.authenticate('google', {
    scope: ['profile','email'] //tells us what info we are using from google account
}));

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    //res.send(req.user); // this displays the user id and name after logging in 
    res.redirect('/profile'); //redirecting to user profile page
});





//auth with github
//npm install passport-github
/*router.get('/github',passport.authenticate('github',{
    scope:['profile']
}));


router.get('/oauth2/code/github', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });



//callback route for github to redirect to
router.get('/code/github',passport.authenticate('github'),(req,res)=>{
    res.send('you reached the redirect URI');
});*/

module.exports = router;