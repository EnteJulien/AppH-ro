var mongoose = require('mongoose');

var aperoSchema = new mongoose.Schema({
    name: String,
    date: Date,
    place: String,
    description: String,
    price: Number,
    dresscode: String,
    organisedBy: {
    type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
    },
    withParticipationOf: [{
        type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        payed: Boolean
    }],
});

var Apero = {
    model: mongoose.model('Apero', aperoSchema),


    findAll: function(req, res) {
        Apero.model.find({}, function (err, aperos) {
            res.json(aperos);
        });
    },

    findById: function(req, res) {
        Apero.model.findById(req.headers.id, function (err, apero) {
             res.json(apero);
        });
    },

    create: function(req, res) {
        Apero.model.create({
            name: req.body.name,
            date: req.body.date,
            place: req.body.place,
            description: req.body.description,
            price: req.body.price,
            dresscode: req.body.dresscode,
            organizer: req.body.organizer._id,
            participant: req.body.paticipant._id
        }, function(err, apero) {
            res.json(apero);
        });
    },

    update: function(req, res) {
        Apero.model.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            date: req.body.date,
            place: req.body.place,
            description: req.body.description,
            price: req.body.price,
            dresscode: req.body.dresscode
        }, function(err, apero) {
            res.json(apero);
        });
    },

    delete: function(req, res){
        Apero.model.findByIdAndRemove(req.params.id, function(){
            res.sendStatus(200);
        })
    }
}


module.exports = Apero;
