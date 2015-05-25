var jsforce = require('jsforce')
//example
//{
// task:"createConnection", loginUrl:"...", "username":"...", "password":""
//}
module.exports = function(definition) {
    return function(context) {
        execute.inject = ["loginUrl", "username", "password"]
        function execute(url, username, password, done) {
            var cn = new jsforce.Connection({loginUrl: url});
            cn.login(username, password, function(err, result) {
               if (err) return done(err);
               return done(null, cn) 
            });
        }
        return execute;
    }
}