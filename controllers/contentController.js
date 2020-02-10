const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        console.log('req made: ', req.query)
        db.ContentModel
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err), console.log("error: ", err));
    },
    findById: function(req, res) {
        db.ContentModel
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    create: function(req, res) {
        db.ContentModel
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    update: function(req, res) {
        db.ContentModel
        .findOneAndUpdate({_id: req.params.id}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    remove: function(req, res) {
        db.ContentModel
        .findById({_id: req.params.id})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    }
};