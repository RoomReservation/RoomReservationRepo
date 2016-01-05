package com.roomreservation.core.dao;


import com.roomreservation.core.entity.Customer;
import org.hibernate.Criteria;
import org.hibernate.criterion.Disjunction;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CustomerDAOImpl extends CoreDAOImpl<Customer, Long> implements CustomerDAO {


   public List<Customer> findLike(String[] words){

       Criteria crit = sessionFactory.getCurrentSession().createCriteria(Customer.class);
       Disjunction or = Restrictions.disjunction();
       for(String word : words){
           or.add(Restrictions.like("name", word, MatchMode.ANYWHERE));
           or.add(Restrictions.like("surname", word,  MatchMode.ANYWHERE));
        }
       crit.add(or);

       return crit.list();

    }
}
