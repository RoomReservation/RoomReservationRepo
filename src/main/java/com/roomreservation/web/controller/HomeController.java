package com.roomreservation.web.controller;


import com.roomreservation.core.entity.Customer;
import com.roomreservation.core.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@ResponseBody
public class HomeController {

    @ResponseStatus(code = HttpStatus.OK)
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public void getHome() {

    }


}
