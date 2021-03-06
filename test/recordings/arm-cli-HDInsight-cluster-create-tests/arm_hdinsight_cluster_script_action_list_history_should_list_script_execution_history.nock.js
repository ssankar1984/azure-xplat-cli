// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_HDI_TEST_LOCATION'] = 'westeurope';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestRgHDInsightClusterCreate5990/providers/Microsoft.HDInsight//clusters/xplatTestHDInsightClusterCreate8208/scriptExecutionHistory?api-version=2015-03-01-preview')
  .reply(200, "{\"value\":[{\"scriptExecutionId\":214591149321467,\"name\":\"testscriptname\",\"applicationName\":null,\"uri\":\"https://hdiconfigactions.blob.core.windows.net/linuxsampleconfigaction/sample.sh\",\"parameters\":\"\",\"roles\":[\"headnode\",\"workernode\"],\"startTime\":\"2016-09-05T08:51:57.8690213Z\",\"endTime\":\"2016-09-05T08:52:08.273176Z\",\"status\":\"Succeeded\",\"operation\":\"PostClusterCreateScriptActionRequest\",\"executionSummary\":[{\"status\":\"COMPLETED\",\"instanceCount\":5}]}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '452',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '65bee5e6-3706-40b8-b0b8-11cc85134a51',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-correlation-request-id': '80091f06-07ab-4349-b8a6-82df6f5b3e2e',
  'x-ms-routing-request-id': 'WESTEUROPE:20160905T085309Z:80091f06-07ab-4349-b8a6-82df6f5b3e2e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 05 Sep 2016 08:53:08 GMT' });
 return result; }]];