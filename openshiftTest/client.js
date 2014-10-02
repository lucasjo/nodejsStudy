var https = require('https');
var url = require('url');




var openShiftClient = {

    username : '',
    password : '',
    options : {
        hostname : 'broker-test.ucareme.co.kr',
        port : 443,
        path : '/broker/rest/api',
        method : 'GET',
        headers : {
            'Authorization': 'Basic ' + new Buffer(this.username + ':' + this.password).toString('base64'),
            'Accept': 'application/json'
        },
        rejectUnauthorized: false,
        agent: false

    },

    links : {},

    getOptions : function(){
        return this.options;
    },

    getLinks : function(){
        return this.links;
    },

    setAuthorization : function(username,password, callback){
        var authStr = 'Basic ' + new Buffer(username + ':' + password).toString('base64');
        this.options.headers.Authorization = authStr;
        callback(this.options);
    },

    linkExcute : function(callback){
        var req = https.request(this.options, function(res){
            console.log('call');
            var rData;
            res.on('data', function(data) {
                var rObj = JSON.parse(data.toString('utf-8'));
                callback(rObj.data);
            });
            res.on('error', function(e){
                console.log(e);
            });

            res.on('end', function(){
                console.log('call end');

            });
        });
        req.on('error', function(e){
            console.error(e);
        });
        req.end();


    }

};

module.exports = openShiftClient;