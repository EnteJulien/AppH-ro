/* ------------------------------------------------------------------------- *\
                                 ROUTES APEROS
\* ------------------------------------------------------------------------- */

var Apero = require('../models/apero.js');
var Auth = require('../middlewares/authorization.js');

module.exports 	= function(app, passport) {

    app.get('/todos', Auth.user.hasAuthorization, Apero.findAll);

    app.post('/todos', Auth.user.hasAuthorization, Apero.create);

    app.put('/todos/:id', Auth.user.hasAuthorization, Apero.update);

    app.delete('/todos/:id', Auth.user.hasAuthorization, Apero.delete);

}
