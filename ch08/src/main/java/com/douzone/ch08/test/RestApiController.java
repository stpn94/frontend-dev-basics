package com.douzone.ch08.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller ("restApiTestController")
public class RestApiController {
	@RequestMapping("/rest/test")
	public String test() {
		return "rest-test";
	}
}