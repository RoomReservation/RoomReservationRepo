package com.roomreservation.core.dao;


import com.roomreservation.core.entity.Reservation;
import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ReservationDAOImpl extends CoreDAOImpl<Reservation, Long> implements ReservationDAO{

    public List<Reservation> findByRoom(Long roomId){


        Criteria crit = sessionFactory.getCurrentSession().createCriteria(Reservation.class);
        crit.add(Restrictions.in("room.id", new Long[]{roomId}));
        return crit.list();


    }
}
