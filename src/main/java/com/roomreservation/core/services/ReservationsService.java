package com.roomreservation.core.services;

import com.roomreservation.core.dao.ReservationDAO;
import com.roomreservation.core.entity.Reservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(propagation = Propagation.REQUIRES_NEW)
public class ReservationsService {

    @Autowired
    ReservationDAO reservationDAO;

    public List<Reservation> getAll(){
        return reservationDAO.findAll();
    }

    public void save(Reservation reservation){
        reservationDAO.save(reservation);
    }

    public void delete(long id){
        reservationDAO.delete(id);
    }

}
