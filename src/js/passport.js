const knex = require("knex")
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy

passport.us(new LocalStrategy(authenticate))


//email and password check would be assyncronys
//done will be called with two things, system level error (error connecting to a database), if there
//is no error it gets "null" and it gets either false - for user validation error. Or is actually will
//pass user.
//After we fetch everythin we can call done and we are good to go.
function authenticate(email, password, done){
  db("users")
    .where("email", email)
    .first()
    .then((user) => {
      if(!user || user.password !== password){
         return done(null, false, {message: "invalid user and password combination"})
      }

      done(null, user)
    }, done)

}

//Take full user object and determine what we sat with a hash on a cookie that goes to your browser.
//We don't want to store whole user in a cookie, we just want to store enough information to identify user.
passport.serializeUser(function(user, done){
   done(null, user.id)
})
//Use log in, we have an id stored in a cookie. deserializeUser is called, it takes that ID from the cookie and
//now we can popoulate full user object. It will be all on express backend, so everything will
//be nice and secure.

passport.deserializeUser(function(id, done){
  db("users")
   .where("id", id)
   .first()
   .then((user) =>{
     done(null, user)
   }, done)
})
