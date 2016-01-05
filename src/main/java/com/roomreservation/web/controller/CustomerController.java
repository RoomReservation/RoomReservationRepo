package com.roomreservation.web.controller;

import com.roomreservation.core.entity.Customer;
import com.roomreservation.core.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@ResponseBody
@RequestMapping(value= "/resources/customers")
public class CustomerController {

	@Autowired
	CustomerService customerService;

	@RequestMapping(method = RequestMethod.GET)
	public List<Customer> getUsers() {
	List<Customer> customerList = customerService.getAll();
		return customerList;
	}

	@RequestMapping(method = RequestMethod.POST)
	public void saveUser(@RequestBody Customer customer) {
		customerService.save(customer);
	}

	@RequestMapping(value="/{id}", method = RequestMethod.DELETE)
	public void deleteUser(@RequestParam long id) {
		customerService.delete(id);
	}

	@RequestMapping(value="/{string}", method = RequestMethod.GET)
	public List<Customer> findUserByString(@RequestParam String string) {
		String[] words = string.split(" ");
		return customerService.findLike(words);
	}




}