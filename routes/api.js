const express = require('express');
const router = express.Router();
const conString = process.env.DATABASE_URL;
const User = require('../models/user');
const Section = require('../models/section');
const Article = require('../models/article');

//-----------------------------------------USER----------------------------------------------

router.get('/user', function(req, res, next) {
	User.find({}).then(function(users){
		res.send(users);
	});
});

/*router.get('/user/:name', function(req, res, next) {
	User.find({name: req.params.name}).then(function(users){
		res.send(users);
	});
});*/

router.get('/user/:id', function(req, res, next) {
	User.findById(req.params.id).then(function(user){
		res.send(user);
	});

});

router.post('/user', function(req, res, next) {
	User.create(req.body).then(function(user){
		res.send(user);
	}).catch(next);
});

router.delete('/user/:id', function(req, res, next){
	User.findByIdAndRemove({_id: req.params.id}).then(function(user){
		 res.send({user});
	});
});

router.put('/user/:id', function(req, res, next){
	User.findByIdAndUpdate({_id:req.params.id}).then(function(user){
		User.findOne({_id:req.params.id}).then(function(user){
			res.send(user);
		});
	});
});

//----------------------------------------SECTION-----------------------------------------------
router.get('/section', function(req, res, next) {
	Section.find({}).then(function(section){
		res.send(section);
	});
});

router.get('/section/:id', function(req, res, next) {
	Section.findById(req.params.id).then(function(section){
		res.send(section);
	});

});

router.post('/section', function(req, res, next) {
	Section.create(req.body).then(function(section){
		res.send(section);
	}).catch(next);
});

router.delete('/section/:id', function(req, res, next){
	Section.findByIdAndRemove({_id: req.params.id}).then(function(section){
		 res.send({section});
	});
});

router.put('/section/:id', function(req, res, next){
	Section.findByIdAndUpdate({_id:req.params.id}).then(function(section){
		Section.findOne({_id:req.params.id}).then(function(section){
			res.send(section);
		});
	});
});

//-----------------------------------------ARTICLE------------------------------------------------
router.get('/article', function(req, res, next) {
	Article.find({}).then(function(article){
		res.send(article);
	});
});

router.get('/article/:section', function(req, res, next) {
	Article.find({section: req.params.section}).then(function(article){
		res.send(article);
	});
});

/*router.get('/article/:id', function(req, res, next) {
	Article.findById(req.params.id).then(function(article){
		res.send(article);
	});
});*/

router.post('/article', function(req, res, next) {
	Article.create(req.body).then(function(article){
		res.send(article);
	}).catch(next);
});

router.delete('/article/:id', function(req, res, next){
	Article.findByIdAndRemove({_id: req.params.id}).then(function(article){
		 res.send({article});
	});
});

router.put('/article/:id', function(req, res, next){
	Article.findByIdAndUpdate({_id:req.params.id}).then(function(article){
		Article.findOne({_id:req.params.id}).then(function(article){
			res.send(article);
		});
	});
});

module.exports = router;