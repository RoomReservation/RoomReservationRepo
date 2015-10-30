package com.roomreservation.core.services;

import com.roomreservation.core.dao.UserDAOImpl;
import com.roomreservation.core.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@Transactional(propagation = Propagation.REQUIRES_NEW)
public class UserService {

    @Autowired
    UserDAOImpl userDAOImpl;

    public List<User> getAll(){
        return userDAOImpl.findAll();
    }

    public void save(User user){
        userDAOImpl.save(user);
    }

    public void delete(long id){
        userDAOImpl.delete(id);
    }

}
