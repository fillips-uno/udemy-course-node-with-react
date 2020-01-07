const passport = require('passport');

module.exports = app => {
    // route handler. Internally passport will reach for the code in passport.use
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            // specifies what access we want to have in the user's profile
            scope: ['profile', 'email']
        })
    )

    // another route handler
    app.get('/auth/google/callback',
        passport.authenticate('google')
    )

    app.get('/api/logout', (req, res) => {
        // logout method comes from passport
        req.logout();
        res.send(req.user);
    })

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
}