package com.roomreservation.core.services;

import com.roomreservation.core.dao.CustomerDAOImpl;
import com.roomreservation.core.entity.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@Transactional(propagation = Propagation.REQUIRES_NEW)
public class CustomerService {

    @Autowired
    CustomerDAOImpl userDAOImpl;

    public List<Customer> getAll(){
        return userDAOImpl.findAll();
    }

    public void save(Customer customer){
        userDAOImpl.save(customer);
    }

    public void delete(long id){
        userDAOImpl.delete(id);
    }

    public List<Customer> findLike(String[] words){return userDAOImpl.findLike(words);}

}
