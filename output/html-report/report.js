$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DemoFeaturePost.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Arjun"
    }
  ],
  "line": 2,
  "name": "POST: Automated Demo Test",
  "description": "Description: POST: The purpose of this feature is to test some demo app.",
  "id": "post:-automated-demo-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 35,
  "name": "POST: Test the Demo app",
  "description": "",
  "id": "post:-automated-demo-test;post:-test-the-demo-app",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@postrequest"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "I want to set URL as \"\u003cURL\u003e\" for test case \"\u003cTestName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I set header content type as \"\u003cContentType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I hit the API with requestbody with formdata \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I try to verify the status code is \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I try to verify the xml response value \"id\" is \"3\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I try to verify the xml response value \"to\" is \"Woking\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I try to verify the xml response value \"from\" is \"London\"",
  "keyword": "And "
});
formatter.examples({
  "line": 44,
  "name": "",
  "description": "",
  "id": "post:-automated-demo-test;post:-test-the-demo-app;",
  "rows": [
    {
      "cells": [
        "TestName",
        "URL",
        "ContentType",
        "RequestBody",
        "RequestMethod",
        "StatusCode"
      ],
      "line": 45,
      "id": "post:-automated-demo-test;post:-test-the-demo-app;;1"
    },
    {
      "cells": [
        "PostRequest",
        "/search-xml",
        "multipart/form-data",
        "testdata/postRequest.txt",
        "POST",
        "200"
      ],
      "line": 46,
      "id": "post:-automated-demo-test;post:-test-the-demo-app;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 33163920,
  "status": "passed"
});
formatter.before({
  "duration": 1195236,
  "status": "passed"
});
formatter.before({
  "duration": 55956184,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "POST: Test the Demo app",
  "description": "",
  "id": "post:-automated-demo-test;post:-test-the-demo-app;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@postrequest"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "I want to set URL as \"/search-xml\" for test case \"PostRequest\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I set header content type as \"multipart/form-data\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I hit the API with requestbody with formdata \"testdata/postRequest.txt\" and request method is \"POST\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I try to verify the status code is \"200\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I try to verify the xml response value \"id\" is \"3\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I try to verify the xml response value \"to\" is \"Woking\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I try to verify the xml response value \"from\" is \"London\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "/search-xml",
      "offset": 22
    },
    {
      "val": "PostRequest",
      "offset": 50
    }
  ],
  "location": "StepDefinitionsTest.setAPIEndpointURL(String,String)"
});
formatter.result({
  "duration": 735280297,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "multipart/form-data",
      "offset": 30
    }
  ],
  "location": "StepDefinitionsTest.setHeader(String)"
});
formatter.result({
  "duration": 13471957,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testdata/postRequest.txt",
      "offset": 46
    },
    {
      "val": "POST",
      "offset": 95
    }
  ],
  "location": "StepDefinitionsTest.submitFormData(String,String)"
});
formatter.result({
  "duration": 12254342132,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "StepDefinitionsTest.verifyStatusCode(String)"
});
formatter.result({
  "duration": 6657253,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "id",
      "offset": 40
    },
    {
      "val": "3",
      "offset": 48
    }
  ],
  "location": "StepDefinitionsTest.verifyXmlResponseValue(String,String)"
});
formatter.result({
  "duration": 1244139779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "to",
      "offset": 40
    },
    {
      "val": "Woking",
      "offset": 48
    }
  ],
  "location": "StepDefinitionsTest.verifyXmlResponseValue(String,String)"
});
formatter.result({
  "duration": 165856648,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "from",
      "offset": 40
    },
    {
      "val": "London",
      "offset": 50
    }
  ],
  "location": "StepDefinitionsTest.verifyXmlResponseValue(String,String)"
});
formatter.result({
  "duration": 60896880,
  "status": "passed"
});
formatter.after({
  "duration": 2162267,
  "status": "passed"
});
formatter.after({
  "duration": 941013,
  "status": "passed"
});
formatter.after({
  "duration": 844616,
  "status": "passed"
});
});