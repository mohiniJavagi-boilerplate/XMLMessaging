#Author: Mohini Javagi
Feature: GET: Automated Get Tests
  Description: GET: purpose of this feature is to test Get request.

  @getrequestpass
  Scenario Outline: GET: Test the Get Request both Pass and Fail
    Given I want to set URL as "<URL>" for test case "<TestName>"
    When I set header content type as "<ContentType>"
    When I hit the API with requestbody "<RequestBody>" and request method is "<RequestMethod>"
    Then I try to verify the status code is "<StatusCode>"

    Examples: 
      | TestName  | URL               | ContentType      | RequestBody | RequestMethod | StatusCode |
      | GetRequest Pass | /search-xml | application/xml |             | GET           |        200 | 
      
  @getrequestfail
  Scenario Outline: GET: Test the Get Request both Pass and Fail
    Given I want to set URL as "<URL>" for test case "<TestName>"
    When I set header content type as "<ContentType>"
    When I hit the API with requestbody "<RequestBody>" and request method is "<RequestMethod>"
    Then I try to verify the status code is "<StatusCode>"

    Examples: 
      | TestName  | URL               | ContentType      | RequestBody | RequestMethod | StatusCode |
      | GetRequest Fail | /search-xml | application/xml |             | GET           |        201 |      