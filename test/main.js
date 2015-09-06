// test/main.js
var should = require('should');
var nodeExcel = require('../index');


describe('Simple Excel xlsx Export', function() {
    describe('Export', function() {
        it('returns xlsx', function() {
		var conf ={};
		conf.cols = [
			{caption:'string', type:'string'},
			{caption:'date', type:'date'},
			{caption:'bool', type:'bool'},
			{caption:'number 2', type:'number'}				
		];
		conf.rows = [
			['pi', (new Date(Date.UTC(2013, 4, 1))).oaDate(), true, 3.14],
			["e", (new Date(2012, 4, 1)).oaDate(), false, 2.7182],
			["M&M<>'", (new Date(Date.UTC(2013, 6, 9))).oaDate(), false, 1.2],
			["null", null, null, null]
		];
		var fs = require('fs');
		var output = fs.createWriteStream('./d.xlsx');
	  var result = nodeExcel.execute(conf);
	  result.pipe(output);
	  result.on('error', function(err) {
		  throw err;
		});
		output.on('close', function() {
		  console.log(archive.pointer() + ' total bytes');
		  console.log('archiver has been finalized and the output file descriptor has closed.');
		});
		setTimeout(function (){}, 5000);
		});
    });
});
