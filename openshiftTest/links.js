var openShiftClient = require('../openshiftTest/client');

var links = {
    getLinks : function(username, password){
        openShiftClient.setAuthorization(username, password);
        openShiftClient.linkExcute(this.resLinks);
    },
    resLinks : function(data){
        console.log(data);
    }
};

module.exports = links;