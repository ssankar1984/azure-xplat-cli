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
  .post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate465/providers/Microsoft.Compute/disks/xplatDisk7872/endGetAccess?api-version=2016-04-30-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/a4d87898-3774-4f2e-9ae8-0c318aa43a7b?monitor=true&api-version=2016-04-30-preview',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/a4d87898-3774-4f2e-9ae8-0c318aa43a7b?api-version=2016-04-30-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131291541509490183',
  'x-ms-request-id': 'a4d87898-3774-4f2e-9ae8-0c318aa43a7b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'd06a8ee1-4c51-4ece-ac82-728c3694d5d8',
  'x-ms-routing-request-id': 'CENTRALUS:20170207T082146Z:d06a8ee1-4c51-4ece-ac82-728c3694d5d8',
  date: 'Tue, 07 Feb 2017 08:21:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate465/providers/Microsoft.Compute/disks/xplatDisk7872/endGetAccess?api-version=2016-04-30-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/a4d87898-3774-4f2e-9ae8-0c318aa43a7b?monitor=true&api-version=2016-04-30-preview',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/a4d87898-3774-4f2e-9ae8-0c318aa43a7b?api-version=2016-04-30-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131291541509490183',
  'x-ms-request-id': 'a4d87898-3774-4f2e-9ae8-0c318aa43a7b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'd06a8ee1-4c51-4ece-ac82-728c3694d5d8',
  'x-ms-routing-request-id': 'CENTRALUS:20170207T082146Z:d06a8ee1-4c51-4ece-ac82-728c3694d5d8',
  date: 'Tue, 07 Feb 2017 08:21:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/a4d87898-3774-4f2e-9ae8-0c318aa43a7b?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-07T08:21:45.9938026+00:00\",\r\n  \"endTime\": \"2017-02-07T08:21:46.1812881+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"a4d87898-3774-4f2e-9ae8-0c318aa43a7b\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131291541509490183',
  'x-ms-request-id': 'c9923caa-4ee4-41e6-8689-db9f34f459b1',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14963',
  'x-ms-correlation-request-id': '3176f882-b636-434c-b2f6-3f7808cd54a6',
  'x-ms-routing-request-id': 'CENTRALUS:20170207T082217Z:3176f882-b636-434c-b2f6-3f7808cd54a6',
  date: 'Tue, 07 Feb 2017 08:22:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/a4d87898-3774-4f2e-9ae8-0c318aa43a7b?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-07T08:21:45.9938026+00:00\",\r\n  \"endTime\": \"2017-02-07T08:21:46.1812881+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"a4d87898-3774-4f2e-9ae8-0c318aa43a7b\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131291541509490183',
  'x-ms-request-id': 'c9923caa-4ee4-41e6-8689-db9f34f459b1',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14963',
  'x-ms-correlation-request-id': '3176f882-b636-434c-b2f6-3f7808cd54a6',
  'x-ms-routing-request-id': 'CENTRALUS:20170207T082217Z:3176f882-b636-434c-b2f6-3f7808cd54a6',
  date: 'Tue, 07 Feb 2017 08:22:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate465/providers/Microsoft.Compute/disks/xplatDisk7872?api-version=2016-04-30-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/d2bb350f-556a-462c-9945-dcd584fa0f91?monitor=true&api-version=2016-04-30-preview',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/d2bb350f-556a-462c-9945-dcd584fa0f91?api-version=2016-04-30-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131291541509490183',
  'x-ms-request-id': 'd2bb350f-556a-462c-9945-dcd584fa0f91',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'dd867835-3ff1-415a-990d-bac723133297',
  'x-ms-routing-request-id': 'CENTRALUS:20170207T082220Z:dd867835-3ff1-415a-990d-bac723133297',
  date: 'Tue, 07 Feb 2017 08:22:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate465/providers/Microsoft.Compute/disks/xplatDisk7872?api-version=2016-04-30-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/d2bb350f-556a-462c-9945-dcd584fa0f91?monitor=true&api-version=2016-04-30-preview',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/d2bb350f-556a-462c-9945-dcd584fa0f91?api-version=2016-04-30-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131291541509490183',
  'x-ms-request-id': 'd2bb350f-556a-462c-9945-dcd584fa0f91',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'dd867835-3ff1-415a-990d-bac723133297',
  'x-ms-routing-request-id': 'CENTRALUS:20170207T082220Z:dd867835-3ff1-415a-990d-bac723133297',
  date: 'Tue, 07 Feb 2017 08:22:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/d2bb350f-556a-462c-9945-dcd584fa0f91?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-07T08:22:19.7986968+00:00\",\r\n  \"endTime\": \"2017-02-07T08:22:19.9863233+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"d2bb350f-556a-462c-9945-dcd584fa0f91\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131291541509490183',
  'x-ms-request-id': '629d0bee-8ff2-4aca-ae4a-7e98a5f026c9',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '1a5ae010-3f17-44b8-81f2-27ecba137ded',
  'x-ms-routing-request-id': 'CENTRALUS:20170207T082251Z:1a5ae010-3f17-44b8-81f2-27ecba137ded',
  date: 'Tue, 07 Feb 2017 08:22:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/d2bb350f-556a-462c-9945-dcd584fa0f91?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-07T08:22:19.7986968+00:00\",\r\n  \"endTime\": \"2017-02-07T08:22:19.9863233+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"d2bb350f-556a-462c-9945-dcd584fa0f91\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131291541509490183',
  'x-ms-request-id': '629d0bee-8ff2-4aca-ae4a-7e98a5f026c9',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '1a5ae010-3f17-44b8-81f2-27ecba137ded',
  'x-ms-routing-request-id': 'CENTRALUS:20170207T082251Z:1a5ae010-3f17-44b8-81f2-27ecba137ded',
  date: 'Tue, 07 Feb 2017 08:22:51 GMT',
  connection: 'close' });
 return result; }]];