/* ------------------------------------------------------------------------- *\
                                 ROUTES APEROS
\* ------------------------------------------------------------------------- */

var Apero = require('../models/apero.js');
/*
var Auth = require('../middlewares/authorization.js');
*/

module.exports 	= function(app/*, passport*/) {

    app.get('/aperos'/*, Auth.user.hasAuthorization*/, Apero.findAll);

    app.post('/aperos', Apero.create);

    app.put('/aperos/:id'/*, Auth.user.hasAuthorization*/, Apero.update);

    app.delete('/aperos/:id'/*, Auth.user.hasAuthorization*/, Apero.delete);

}
