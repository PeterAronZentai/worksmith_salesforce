# worksmith_salesforce

Salesforce activities for [worksmith](http://npmjs.com/package/worksmith)

This package contains the following activities/tasks:

name | description
--- | ---
[connect](#connect-activity) | Logs you into Salesforce and create a connection object for later used in other SF activites
[createEntity](#createentity-activity) | Creates a Salesforce entity with the specified `type` and `fields`.

### connect activity
Logs you into Salesforce and create a connection object for later used in other SF activites
##### params
name | type | description
--- | --- | ---
loginUrl | string | The SF login authority to connect agains e.g. eu5.salesforce.com
username | string | ...
password | string | ...

##### example

```javascript
var worksmith = require('worksmith')
worksmith.use("sf", require('worksmith_salesforce'))
var wf = worksmith({task:"sequence", items : [{
    task:"sf/connect",
    loginUrl:"https://eu5.salesforce.com",
    username:"peter.zentai@*********.com",
    password:"**************************",
    resultTo: "sfcn"
}])
```

### createEntity activity
Creates a Salesforce entity with the specified `type` and `fields`.

##### params
name | type | description
--- | --- | ---
connection | connection object | usually the result of a `connect` actity
entityType | string | the name of the entity type to create
fields | object | the hash of the fields to create the entity with

##### example

```javascript
{
    task:"sf/createEntity",
    connection:"@sfcn",
    entityType:"Account",
    fields: {
        Name: "PeterZentai"
    },
    resultTo:"newAccount"
}
```
