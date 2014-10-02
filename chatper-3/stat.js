/**
 * Created by kikimans on 2014-10-01.
 */

var fs = require("fs");
fs.stat('./stat.js', function(err, stats){
    if(err) throw err;
    console.log(stats);
    console.log('isFile : ' + stats.isFile);
});