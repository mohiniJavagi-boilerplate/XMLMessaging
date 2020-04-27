#Author: Mohini Javagi
Feature: PUT: Automated PUT Request Tests
  Description: PUT: Validate the PUT request with success response code and Response body Message

  @putpass
  Scenario Outline: PUT: 
    Given I want to set URL as "<URL>" for test case "<TestName>"
    When I set header content type as "<ContentType>"
    When I hit the API with requestbody "<RequestBody>" and request method is "<RequestMethod>"
    Then I try to verify the status code is "<StatusCode>"
    And I try to verify the response value "name" is "morpheus"
    And I try to verify the response value "job" is "zion resident"

    Examples: 
      | TestName  | URL          | ContentType      | RequestBody         | RequestMethod | StatusCode |
      | PUTRequest Pass | /search-xml | multipart/form-data | testdata/putRequest.txt | PUT           |        200 |

