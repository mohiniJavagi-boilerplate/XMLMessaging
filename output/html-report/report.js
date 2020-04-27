$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GetRequest.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Mohini Javagi"
    }
  ],
  "line": 2,
  "name": "GET: Automated Get Tests",
  "description": "Description: GET: purpose of this feature is to test Get request.",
  "id": "get:-automated-get-tests",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "GET: Test the Get Request both Pass and Fail",
  "description": "",
  "id": "get:-automated-get-tests;get:-test-the-get-request-both-pass-and-fail",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@getrequestpass"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I want to set URL as \"\u003cURL\u003e\" for test case \"\u003cTestName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I set header content type as \"\u003cContentType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I hit the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I try to verify the status code is \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "get:-automated-get-tests;get:-test-the-get-request-both-pass-and-fail;",
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
      "line": 13,
      "id": "get:-automated-get-tests;get:-test-the-get-request-both-pass-and-fail;;1"
    },
    {
      "cells": [
        "GetRequest Pass",
        "/search-xml",
        "application/xml",
        "",
        "GET",
        "200"
      ],
      "line": 14,
      "id": "get:-automated-get-tests;get:-test-the-get-request-both-pass-and-fail;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1480621,
  "status": "passed"
});
formatter.before({
  "duration": 33362,
  "status": "passed"
});
formatter.before({
  "duration": 212914,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "GET: Test the Get Request both Pass and Fail",
  "description": "",
  "id": "get:-automated-get-tests;get:-test-the-get-request-both-pass-and-fail;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@getrequestpass"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I want to set URL as \"/search-xml\" for test case \"GetRequest Pass\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I set header content type as \"application/xml\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I hit the API with requestbody \"\" and request method is \"GET\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I try to verify the status code is \"200\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/search-xml",
      "offset": 22
    },
    {
      "val": "GetRequest Pass",
      "offset": 50
    }
  ],
  "location": "StepDefinitionsTest.setAPIEndpointURL(String,String)"
});
formatter.result({
  "duration": 249659730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/xml",
      "offset": 30
    }
  ],
  "location": "StepDefinitionsTest.setHeader(String)"
});
formatter.result({
  "duration": 463335,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 32
    },
    {
      "val": "GET",
      "offset": 57
    }
  ],
  "location": "StepDefinitionsTest.submitRequest(String,String)"
});
formatter.result({
  "duration": 5923704124,
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
  "duration": 2643856,
  "status": "passed"
});
formatter.after({
  "duration": 48721,
  "status": "passed"
});
formatter.after({
  "duration": 10920,
  "status": "passed"
});
formatter.after({
  "duration": 11157,
  "status": "passed"
});
});