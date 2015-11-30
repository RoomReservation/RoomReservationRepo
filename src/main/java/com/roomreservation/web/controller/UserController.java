package com.roomreservation.web.controller;

import com.roomreservation.core.entity.User;
import com.roomreservation.core.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@ResponseBody
@RequestMapping(value= "/users")
public class UserController {

	@Autowired
	UserService userService;

	@RequestMapping(method = RequestMethod.GET)
	public List<User> getUsers() {
	List<User> userList = userService.getAll();
		return userList;
	}

	@RequestMapping(method = RequestMethod.POST)
	public void saveUser(@RequestBody User user) {
		userService.save(user);
	}

	@RequestMapping(value="/{id}", method = RequestMethod.DELETE)
	public void deleteUser(@RequestParam long id) {
		userService.delete(id);
	}

	@RequestMapping(value="/{string}", method = RequestMethod.GET)
	public List<User> findUserByString(@RequestParam String string) {
		String[] words = string.split(" ");
		return userService.findLike(words);
	}




}