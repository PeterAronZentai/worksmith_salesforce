module.exports = function() {
    return function() {
        
        execute.inject = ["connection", "entityType", "fields"];
        function execute(cn, entityType, fields, done) {
            return cn.sobject("Account").create(fields, done)
        }
        return execute;
    }    
}