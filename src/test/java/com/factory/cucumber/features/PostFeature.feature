#Author: Mohini Javagi
Feature: POST: Automated Post Request Tests
  Description: POST: purpose of this feature is to test POST request.

  @postrequestsuccess
  Scenario Outline: POST: Validate the POST request with success response code and Response body Message
    Given I want to set URL as "<URL>" for test case "<TestName>"
    When I set header content type as "<ContentType>"
    When I hit the API with requestbody with formdata "<RequestBody>" and request method is "<RequestMethod>"
    Then I try to verify the status code is "<StatusCode>"
    And I try to verify the xml response value "id" is "3"
    And I try to verify the xml response value "to" is "Woking"
    And I try to verify the xml response value "from" is "London"

    Examples: 
      | TestName  | URL        | ContentType      | RequestBody        | RequestMethod | StatusCode |
      | PostRequestSuccess |/search-xml  | multipart/form-data | testdata/postRequest.txt | POST          |        200 |  
      
      
  @postrequestfail
  Scenario Outline: POST: Validate the POST request with failure Response body Message
    Given I want to set URL as "<URL>" for test case "<TestName>"
    When I set header content type as "<ContentType>"
    When I hit the API with requestbody with formdata "<RequestBody>" and request method is "<RequestMethod>"
    Then I try to verify the status code is "<StatusCode>"
    And I try to verify the xml response value "id" is "4"
    And I try to verify the xml response value "to" is "WrongValue"
    And I try to verify the xml response value "from" is "Woking"

    Examples: 
      | TestName  | URL        | ContentType      | RequestBody        | RequestMethod | StatusCode |
      | PostRequestFailure |/search-xml  | application/xml| testdata/postRequest.txt | POST          |        400 |    