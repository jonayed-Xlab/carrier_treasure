package ecommerce.api.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/test")
public class TestController {

    @RequestMapping("/")
    public String SpringBootHello() {
        return "spring boot basic authentication database";
    }
}
