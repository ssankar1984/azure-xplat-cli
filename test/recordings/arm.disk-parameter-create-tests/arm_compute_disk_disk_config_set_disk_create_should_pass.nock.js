// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourcegroups/xTestDiskCreate465?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xTestDiskCreate465' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': 'e2cc22d3-3824-4678-9aa0-0153602b8aa3',
  'x-ms-correlation-request-id': 'e2cc22d3-3824-4678-9aa0-0153602b8aa3',
  'x-ms-routing-request-id': 'WESTUS2:20170207T081803Z:e2cc22d3-3824-4678-9aa0-0153602b8aa3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 07 Feb 2017 08:18:02 GMT',
  connection: 'close',
  'content-length': '110' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourcegroups/xTestDiskCreate465?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xTestDiskCreate465' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': 'e2cc22d3-3824-4678-9aa0-0153602b8aa3',
  'x-ms-correlation-request-id': 'e2cc22d3-3824-4678-9aa0-0153602b8aa3',
  'x-ms-routing-request-id': 'WESTUS2:20170207T081803Z:e2cc22d3-3824-4678-9aa0-0153602b8aa3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 07 Feb 2017 08:18:02 GMT',
  connection: 'close',
  'content-length': '110' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourcegroups/xTestDiskCreate465?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate465\",\"name\":\"xTestDiskCreate465\",\"location\":\"southeastasia\",\"tags\":{\"arm.disk-parameter-create-tests\":\"2017-02-07T08:18:02.457Z\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '266',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '1e5ae083-cba6-42a9-b9ea-138cbc16eecf',
  'x-ms-correlation-request-id': '1e5ae083-cba6-42a9-b9ea-138cbc16eecf',
  'x-ms-routing-request-id': 'WESTUS2:20170207T081805Z:1e5ae083-cba6-42a9-b9ea-138cbc16eecf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 07 Feb 2017 08:18:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourcegroups/xTestDiskCreate465?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate465\",\"name\":\"xTestDiskCreate465\",\"location\":\"southeastasia\",\"tags\":{\"arm.disk-parameter-create-tests\":\"2017-02-07T08:18:02.457Z\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '266',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '1e5ae083-cba6-42a9-b9ea-138cbc16eecf',
  'x-ms-correlation-request-id': '1e5ae083-cba6-42a9-b9ea-138cbc16eecf',
  'x-ms-routing-request-id': 'WESTUS2:20170207T081805Z:1e5ae083-cba6-42a9-b9ea-138cbc16eecf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 07 Feb 2017 08:18:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate465/providers/Microsoft.Compute/disks/xplatDisk7872?api-version=2016-04-30-preview', '*')
  .reply(202, "{\r\n  \"properties\": {\r\n    \"accountType\": \"Standard_LRS\",\r\n    \"osType\": \"Windows\",\r\n    \"creationData\": {\r\n      \"createOption\": \"Empty\"\r\n    },\r\n    \"diskSizeGB\": 5,\r\n    \"encryptionSettings\": {\r\n      \"enabled\": false\r\n    },\r\n    \"provisioningState\": \"Updating\",\r\n    \"isArmResource\": true\r\n  },\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '347',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/51c33e3b-9ff8-4d47-902a-472926fe5373?monitor=true&api-version=2016-04-30-preview',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/51c33e3b-9ff8-4d47-902a-472926fe5373?api-version=2016-04-30-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131291541509490183',
  'x-ms-request-id': '51c33e3b-9ff8-4d47-902a-472926fe5373',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '539e4900-8cd1-4493-8b52-450b57ca6ed6',
  'x-ms-routing-request-id': 'WESTUS2:20170207T081811Z:539e4900-8cd1-4493-8b52-450b57ca6ed6',
  date: 'Tue, 07 Feb 2017 08:18:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate465/providers/Microsoft.Compute/disks/xplatDisk7872?api-version=2016-04-30-preview', '*')
  .reply(202, "{\r\n  \"properties\": {\r\n    \"accountType\": \"Standard_LRS\",\r\n    \"osType\": \"Windows\",\r\n    \"creationData\": {\r\n      \"createOption\": \"Empty\"\r\n    },\r\n    \"diskSizeGB\": 5,\r\n    \"encryptionSettings\": {\r\n      \"enabled\": false\r\n    },\r\n    \"provisioningState\": \"Updating\",\r\n    \"isArmResource\": true\r\n  },\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '347',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/51c33e3b-9ff8-4d47-902a-472926fe5373?monitor=true&api-version=2016-04-30-preview',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/51c33e3b-9ff8-4d47-902a-472926fe5373?api-version=2016-04-30-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131291541509490183',
  'x-ms-request-id': '51c33e3b-9ff8-4d47-902a-472926fe5373',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '539e4900-8cd1-4493-8b52-450b57ca6ed6',
  'x-ms-routing-request-id': 'WESTUS2:20170207T081811Z:539e4900-8cd1-4493-8b52-450b57ca6ed6',
  date: 'Tue, 07 Feb 2017 08:18:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/51c33e3b-9ff8-4d47-902a-472926fe5373?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-07T08:18:11.0710639+00:00\",\r\n  \"endTime\": \"2017-02-07T08:18:11.2741968+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"properties\": {\r\n    \"output\": {\"properties\":{\"accountType\":\"Standard_LRS\",\"osType\":\"Windows\",\"creationData\":{\"createOption\":\"Empty\"},\"diskSizeGB\":5,\"encryptionSettings\":{\"enabled\":false},\"timeCreated\":\"2017-02-07T08:18:11.0867177+00:00\",\"provisioningState\":\"Succeeded\",\"diskState\":\"Unattached\"},\"type\":\"Microsoft.Compute/disks\",\"location\":\"southeastasia\",\"tags\":{},\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate465/providers/Microsoft.Compute/disks/xplatDisk7872\",\"name\":\"xplatDisk7872\"}\r\n  },\r\n  \"name\": \"51c33e3b-9ff8-4d47-902a-472926fe5373\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '724',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131291541509490183',
  'x-ms-request-id': '407feb66-195e-413b-ba85-639557fe0ae5',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'a526d60c-cc52-4f60-8557-3711f66c9d55',
  'x-ms-routing-request-id': 'CENTRALUS:20170207T081842Z:a526d60c-cc52-4f60-8557-3711f66c9d55',
  date: 'Tue, 07 Feb 2017 08:18:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/51c33e3b-9ff8-4d47-902a-472926fe5373?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-07T08:18:11.0710639+00:00\",\r\n  \"endTime\": \"2017-02-07T08:18:11.2741968+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"properties\": {\r\n    \"output\": {\"properties\":{\"accountType\":\"Standard_LRS\",\"osType\":\"Windows\",\"creationData\":{\"createOption\":\"Empty\"},\"diskSizeGB\":5,\"encryptionSettings\":{\"enabled\":false},\"timeCreated\":\"2017-02-07T08:18:11.0867177+00:00\",\"provisioningState\":\"Succeeded\",\"diskState\":\"Unattached\"},\"type\":\"Microsoft.Compute/disks\",\"location\":\"southeastasia\",\"tags\":{},\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate465/providers/Microsoft.Compute/disks/xplatDisk7872\",\"name\":\"xplatDisk7872\"}\r\n  },\r\n  \"name\": \"51c33e3b-9ff8-4d47-902a-472926fe5373\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '724',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131291541509490183',
  'x-ms-request-id': '407feb66-195e-413b-ba85-639557fe0ae5',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'a526d60c-cc52-4f60-8557-3711f66c9d55',
  'x-ms-routing-request-id': 'CENTRALUS:20170207T081842Z:a526d60c-cc52-4f60-8557-3711f66c9d55',
  date: 'Tue, 07 Feb 2017 08:18:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate465/providers/Microsoft.Compute/disks/xplatDisk7872?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"accountType\": \"Standard_LRS\",\r\n    \"osType\": \"Windows\",\r\n    \"creationData\": {\r\n      \"createOption\": \"Empty\"\r\n    },\r\n    \"diskSizeGB\": 5,\r\n    \"encryptionSettings\": {\r\n      \"enabled\": false\r\n    },\r\n    \"timeCreated\": \"2017-02-07T08:18:11.0867177+00:00\",\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"diskState\": \"Unattached\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/disks\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate465/providers/Microsoft.Compute/disks/xplatDisk7872\",\r\n  \"name\": \"xplatDisk7872\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '621',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131291541509490183',
  'x-ms-request-id': 'b40f051c-08f1-4985-acb5-3ac6ee7940ea',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '0f08e9d7-cf94-4726-95c2-a85dd8ac3487',
  'x-ms-routing-request-id': 'CENTRALUS:20170207T081844Z:0f08e9d7-cf94-4726-95c2-a85dd8ac3487',
  date: 'Tue, 07 Feb 2017 08:18:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate465/providers/Microsoft.Compute/disks/xplatDisk7872?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"accountType\": \"Standard_LRS\",\r\n    \"osType\": \"Windows\",\r\n    \"creationData\": {\r\n      \"createOption\": \"Empty\"\r\n    },\r\n    \"diskSizeGB\": 5,\r\n    \"encryptionSettings\": {\r\n      \"enabled\": false\r\n    },\r\n    \"timeCreated\": \"2017-02-07T08:18:11.0867177+00:00\",\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"diskState\": \"Unattached\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/disks\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate465/providers/Microsoft.Compute/disks/xplatDisk7872\",\r\n  \"name\": \"xplatDisk7872\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '621',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131291541509490183',
  'x-ms-request-id': 'b40f051c-08f1-4985-acb5-3ac6ee7940ea',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '0f08e9d7-cf94-4726-95c2-a85dd8ac3487',
  'x-ms-routing-request-id': 'CENTRALUS:20170207T081844Z:0f08e9d7-cf94-4726-95c2-a85dd8ac3487',
  date: 'Tue, 07 Feb 2017 08:18:43 GMT',
  connection: 'close' });
 return result; }]];