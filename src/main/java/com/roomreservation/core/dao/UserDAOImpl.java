package com.roomreservation.core.dao;


import com.roomreservation.core.entity.Reservation;
import com.roomreservation.core.entity.User;
import org.hibernate.Criteria;
import org.hibernate.criterion.Disjunction;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Component;

import javax.jws.soap.SOAPBinding;
import java.util.List;

@Component
public class UserDAOImpl extends CoreDAOImpl<User, Long> implements UserDAO{


   public List<User> findLike(String[] words){

       Criteria crit = sessionFactory.getCurrentSession().createCriteria(User.class);
       Disjunction or = Restrictions.disjunction();
       for(String word : words){
           or.add(Restrictions.like("name", word, MatchMode.ANYWHERE));
           or.add(Restrictions.like("surname", word,  MatchMode.ANYWHERE));
        }
       crit.add(or);

       return crit.list();

    }
}
