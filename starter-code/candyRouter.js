var express = require('express');
var bodyParser = require('body-parser');
router = express.Router();

var candies = [
		{
			id:1,
			name:"Chewing Gum",
			color:"Red"
		},
		{
			id:2,
			name:"Pez",
			color:"Green"
		},
		{
			id:3,
			name:"Marshmallow",
			color:"Pink"
		},
		{
			id:4,
			name:"Candy Stick",
			color:"Blue"
		}
	];

router.get('/', function(req,res) {
	console.log(__dirname);
	res.send(candies);
});

router.get('/:id', function(req,res) {
	var id = req.params.id;
	res.send(candies[id-1]);
});

router.post('/', function(req, res){
	var candy = {
		id: req.body.id,
		name: req.body.name,
		color: req.body.color
	};
	candies.push(candy);
	res.send(candy);
});

router.put('/:id', function(req, res){
	candies[req.params.id - 1].name = req.body.name;
	candies[req.params.id - 1].color = req.body.color;
});

router.delete('/:id', function(req, res){
	candies.splice((req.params.id)-1, 1);
	var obj = {message : "delete"};
	res.send(obj);
})

module.exports = router;