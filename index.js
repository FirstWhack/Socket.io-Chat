var chatServer 	= require('./server');

chatServer.connectCouch( function (bucket) {
	chatServer.initialize(bucket);
});


