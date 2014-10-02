var openShiftClient = require('../openshiftTest/client');

var users = {

    rhlogin : '',
    password : '',
    options : {},

    getRhlogin : function(){
        return this.rhlogin;
    },

    getPassword : function(){
        return this.password.toString('base64');
    }

    get_user : function(username,password){
        this.rhlogin = username;
        this.password = password;

        openShiftClient.setAuthorization(username, password, this.getLinkOption);

    },

    getLinkOption : function(options){
        links.getUserLink(options, this, this.excute);
    },

    excute : function(){

    }




};