'use strict';

// For challenge 4.
// request documentation is available on https://github.com/request/request

var request = require('request');



request({
	method: 'PUT',
	uri:'http://localhost:3000/bikes/create',
	json: {	name:'Thamer',price:'1000',country:'TN'}
},function(err,req,body){
    console.log(body);

});
