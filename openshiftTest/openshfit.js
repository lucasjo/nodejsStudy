var https = require('https');

var options = {
    hostname : 'broker-test.ucareme.co.kr',
    port : 443,
    path : '/broker/rest/api',
    method : 'GET',
    headers : {
        'Authorization': 'Basic ' + new Buffer('kikimans@jyes.co.kr' + ':' + 'alsgh@1716').toString('base64'),
        'Accept': 'application/json'
    },
    rejectUnauthorized: false,
    agent: false

};

var req = https.request(options, function(res){

    console.log('statusCode : ' + res.statusCode);
    console.log('header : ', res.headers);


    res.on('data', function(data) {

        var obj = JSON.parse(data.toString('utf-8'));
        console.log(obj.data);
        var datajson = new Buffer(data, 'utf-8');
        console.log(datajson.toString());


    });

    res.on('end', function(){
        console.log('end');
    })
});

req.end();

req.on('error', function(e){
    console.log(options.headers);
    console.error(e);
});