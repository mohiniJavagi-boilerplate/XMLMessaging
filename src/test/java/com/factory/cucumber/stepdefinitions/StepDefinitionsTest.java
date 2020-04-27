package com.factory.cucumber.stepdefinitions;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;
import java.util.logging.Logger;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.junit.Assert;
import org.junit.Test;

import com.aventstack.extentreports.Status;
import com.cucumber.listener.Reporter;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.w3c.dom.*;
import org.xml.sax.InputSource;

import javax.xml.XMLConstants;
import javax.xml.parsers.*;
import javax.xml.validation.Schema;
import javax.xml.validation.SchemaFactory;

import java.io.*;

public class StepDefinitionsTest {
	private final static Logger logger = Logger.getLogger(StepDefinitionsTest.class.getName());
	public static String apiEndPointUri;
	public static String testName;
	public static String CONTENT_TYPE;
	public static String STATUS_CODE;
	public static String FILE_PATH;
	public static String REQUESTBODY;
	public static String RESPONSEBODY;
	public static Response response;
	
	@Given("^I want to set URL as \"([^\"]*)\" for test case \"([^\"]*)\"$")
	public void setAPIEndpointURL(String URL, String testCaseName) {
//		String apiHostName = "https://reqres.in";
		String apiHostName = "https://www.yourholidays.com.au";
		apiEndPointUri = String.format("%s%s", apiHostName, URL);
		testName = testCaseName;
		Reporter.addStepLog(Status.PASS + " :: Cucumber Hostname URL is :: " + apiEndPointUri);
		logger.info("Cucumber Hostname URL is :: " + apiEndPointUri);
		logger.info("Cucumber Test case name is :: " + testName);
	}

	@When("^I set header content type as \"([^\"]*)\"$")
	public void setHeader(String contentType) {
		if (contentType != null && !contentType.isEmpty()) {
			CONTENT_TYPE = contentType;
			Reporter.addStepLog(Status.PASS + " :: content type is :: " + CONTENT_TYPE);
			logger.info("Content type is :: " + CONTENT_TYPE);
		} else {
			Reporter.addStepLog(Status.FAIL + " :: content type cannot be null or empty!");
			logger.info("Content type cannot be null or empty!");
		}
	}

	@And("^I hit the API with requestbody \"([^\"]*)\" and request method is \"([^\"]*)\"$")
	public void submitRequest(String requestBodyPath, String requestType) throws Throwable {
		RestAssured.baseURI = apiEndPointUri;
        RequestSpecification request = RestAssured.given();
		request.header("Content-Type", CONTENT_TYPE);
		if (requestBodyPath != null && !requestBodyPath.isEmpty() && requestType.equalsIgnoreCase("POST")
				|| requestType.equalsIgnoreCase("PUT")) {
			JSONParser jsonParser = new JSONParser();
			FILE_PATH = System.getProperty("user.dir") + "//src//test//java//com//factory//cucumber//"
					+ requestBodyPath;
			logger.info("Path of requestbody file is :: " + FILE_PATH);
			try (FileReader reader = new FileReader(FILE_PATH)) {
				Object obj = jsonParser.parse(reader);
				REQUESTBODY = obj.toString();
				logger.info("Request Body is :: " + REQUESTBODY);
			} catch (FileNotFoundException | ParseException exc) {
				exc.printStackTrace();
			}
			if (REQUESTBODY.length() > 0) {
				request.body(REQUESTBODY);
				response = request.post();
			} else {
				Reporter.addStepLog(Status.FAIL + " :: Request Body cannot be null or empty!");
				logger.info(" Request Body cannot be null or empty!");
			}
		} else if (requestType.equalsIgnoreCase("GET")) {
			response = request.get();
		}
		STATUS_CODE = String.valueOf(response.getStatusCode());
		RESPONSEBODY = response.getBody().asString();
		Reporter.addStepLog(Status.PASS + " :: Request successfully processed");
		Reporter.addStepLog("Response is :: " + RESPONSEBODY);
	}
	
	@And("^I hit the API with requestbody with formdata \"([^\"]*)\" and request method is \"([^\"]*)\"$")
	public void submitFormData(String requestBodyPath, String requestType) throws Throwable {
		RestAssured.baseURI = apiEndPointUri;
//        RequestSpecification request = RestAssured.given();
		RequestSpecification req =  RestAssured.given();
        req.contentType("multipart/form-data");
        FILE_PATH = System.getProperty("user.dir") + "//src//test//java//com//factory//cucumber//"
				+ requestBodyPath;
        
        HashMap<String, String> map = new HashMap<String, String>();

        String line;
        BufferedReader reader = new BufferedReader(new FileReader(FILE_PATH));
        while ((line = reader.readLine()) != null)
        {
            String[] parts = line.split(":", 2);
            if (parts.length >= 2)
            {
                String key = parts[0];
                String value = parts[1];
                map.put(key, value);
            } else {
                System.out.println("ignoring line: " + line);
            }
        }
       
        
        for (HashMap.Entry<String,String> entry : map.entrySet())
        {
            String key = entry.getKey();
            String value = entry.getValue();
            req.multiPart(key, value);
        }
        System.out.println("requestBodyPath: " + requestBodyPath);

        response =  req.post();
	
	STATUS_CODE = String.valueOf(response.getStatusCode());
	RESPONSEBODY = response.getBody().asString();
	Reporter.addStepLog(Status.PASS + " :: Request successfully processed");
	Reporter.addStepLog("Response is :: " + RESPONSEBODY);
}

	@Then("^I try to verify the status code is \"([^\"]*)\"$")
	public void verifyStatusCode(String statusCode) {
		if (statusCode.equals(String.valueOf(STATUS_CODE))) {
			Assert.assertEquals(STATUS_CODE, statusCode);
			Reporter.addStepLog(Status.PASS + " :: Status Code is :: " + STATUS_CODE);
			logger.info("Status Code is :: " + STATUS_CODE);
		} else {
			Assert.assertEquals(STATUS_CODE, statusCode);
			Reporter.addStepLog(Status.FAIL + " :: Status Code is :: " + STATUS_CODE);
			logger.info("Status Code is not as expected :: " + STATUS_CODE);
		}
	}

	@And("^I try to verify the response value \"([^\"]*)\" is \"([^\"]*)\"$")
	public void verifyResponseValue(String responseKey, String value) throws Throwable {
		Object obj = responseKey;
		JSONParser parser = new JSONParser();
		JSONObject responseObject = (JSONObject) parser.parse(RESPONSEBODY);
		Object key = (Object) responseObject.get(responseKey);
		compareResponseValues(String.valueOf(value), String.valueOf(key), responseKey);
	}
	
	@And("^I try to verify the xml response value \"([^\"]*)\" is \"([^\"]*)\"$")
	public void verifyXmlResponseValue(String responseKey, String value) throws Throwable {
		//Parser that produces DOM object trees from XML content
        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
         
        //API to obtain DOM Document instance
        DocumentBuilder builder = null;
        Document doc = null;
        try
        {
            //Create DocumentBuilder with default configuration
            builder = factory.newDocumentBuilder();
             
            //Parse the content to Document object
            doc = builder.parse(new InputSource(new StringReader(RESPONSEBODY)));
        } 
        catch (Exception e) 
        {
            e.printStackTrace();
        }
        Element rootElement = doc.getDocumentElement();
        String responseValue = getString(responseKey, rootElement);
		compareResponseValues(value, responseValue ,responseKey);
	}
	
	protected String getString(String tagName, Element element) {
        NodeList list = element.getElementsByTagName(tagName);
        if (list != null && list.getLength() > 0) {
            NodeList subList = list.item(2).getChildNodes();
//            System.out.println("subList" + subList);


            if (subList != null && subList.getLength() > 0) {
                return subList.item(0).getNodeValue();
            }
        }

        return null;
    }

	private void compareResponseValues(String expected, String actual, String responseKey) {
		Reporter.addStepLog("Actual Value is  ::" + actual);
		Reporter.addStepLog("Expected Value is  ::" + expected);
		logger.info("Actual Value is  ::" + actual);
		logger.info("Expected Value is  ::" + expected);
		if (expected.equals(actual)) {
			Assert.assertEquals(actual, expected);
			Reporter.addStepLog(Status.PASS + " " + responseKey + " : Expected value : " + expected
					+ " mathches with Actual Value : " + actual);
		} else {
			Reporter.addStepLog(Status.FAIL + " " + responseKey + " : Expected value : " + expected
					+ " do not matches with Actual Value : " + actual);
			Assert.assertEquals(actual, expected);
		}
	}

}
