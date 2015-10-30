package com.roomreservation.core.dao;


import com.roomreservation.core.entity.User;
import org.springframework.stereotype.Component;

@Component
public class UserDAOImpl extends CoreDAOImpl<User, Long> implements UserDAO{

}
