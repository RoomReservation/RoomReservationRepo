package com.roomreservation.core.services;

import com.roomreservation.core.dao.ReservationDAO;
import com.roomreservation.core.dao.RoomDAO;
import com.roomreservation.core.dao.CustomerDAO;
import com.roomreservation.core.entity.Customer;
import com.roomreservation.core.entity.Reservation;
import com.roomreservation.core.entity.Room;
import com.roomreservation.web.dto.ReservationDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Service
@Transactional(propagation = Propagation.REQUIRES_NEW)
public class ReservationsService {

    @Autowired
    ReservationDAO reservationDAO;

    @Autowired
    RoomDAO roomDAO;

    @Autowired
    CustomerDAO customerDAO;


    public List<Reservation> findByRoom(long roomId){ return reservationDAO.findByRoom(roomId);}

    public List<Reservation> getAll(){
        return reservationDAO.findAll();
    }

    public void save(ReservationDTO reservationDTO){
        Customer customer = customerDAO.findById(reservationDTO.getUserId());
        Room room = roomDAO.findById(reservationDTO.getRoomId());
        Date dateFrom = reservationDTO.getDateFrom();
        Date dateTo = reservationDTO.getDateTo();
        Reservation reservation = new Reservation(room, customer, dateFrom, dateTo);
        reservationDAO.save(reservation);
    }

    public void delete(long id){
        reservationDAO.delete(id);
    }

}
