const fcns = require("../fcns");

exports.insertOneGet = (req, res) => {
	const collection = fcns.init(req.params.collection);
	let pArr = {};

	const params = req.params.id.split("&");

	params.map(ele => {
		let pSplit = ele.split("=");
		let p1 = pSplit[0];
		let p2 = pSplit[1];
		pArr[p1] = p2;
	});
	collection.insertOne(pArr, (err, result) => {
		console.log(result.insertedCount);
		if (err) {
			fcns.sendError(500, err, res);
		} else {
			fcns.sendSuccessData(result.insertedCount, res);
		}
	});
};

exports.insertOnePost = (req, res) => {
	const collection = fcns.init(req.params.collection);
	let pArr = req.body;

	collection.insertOne(pArr, (err, result) => {
		if (err) {
			fcns.sendError(500, err, res);
		} else {
			fcns.sendSuccessData(result.insertedCount, res);
		}
	});
};

exports.insertPost = (req, res) => {
	const collection = fcns.init(req.params.collection);
	let pArr = {};
	let options;
	if (req.body.urlDbOptions === undefined) {
		options = {};
		pArr = req.body;
	} else {
		options = req.body.urlDbOptions;
		pArr = req.body.urlDbData;
	}

	collection.insertMany(pArr, options, (err, result) => {
		if (err) {
			fcns.sendError(500, err, res);
		} else {
			fcns.sendSuccessData(result.insertedCount, res);
		}
	});
};

exports.save = (req, res) => {
	const collection = fcns.init(req.params.collection);
	let pArr = {};
	let options;
	if (req.body.urlDbOptions === undefined) {
		options = {};
		pArr = req.body;
	} else {
		options = req.body.urlDbOptions;
		pArr = req.body.urlDbData;
	}

	collection.save(pArr, options, (err, result) => {
		if (err) {
			fcns.sendError(500, err, res);
		} else {
			fcns.sendSuccessData(result.insertedCount, res);
		}
	});
};
