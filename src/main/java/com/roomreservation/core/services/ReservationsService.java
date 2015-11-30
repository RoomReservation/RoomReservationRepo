package com.roomreservation.core.services;

import com.roomreservation.core.dao.ReservationDAO;
import com.roomreservation.core.dao.RoomDAO;
import com.roomreservation.core.dao.UserDAO;
import com.roomreservation.core.entity.Reservation;
import com.roomreservation.core.entity.Room;
import com.roomreservation.core.entity.User;
import com.roomreservation.web.dto.ReservationDTO;
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

    @Autowired
    RoomDAO roomDAO;

    @Autowired
    UserDAO userDAO;


    public List<Reservation> findByRoom(long roomId){ return reservationDAO.findByRoom(roomId);}

    public List<Reservation> getAll(){
        return reservationDAO.findAll();
    }

    public void save(ReservationDTO reservationDTO){
        User user = userDAO.findById(reservationDTO.getUserId());
        Room room = roomDAO.findById(reservationDTO.getRoomId());

        Reservation reservation = new Reservation(room, user, reservationDTO.getDateFrom(), reservationDTO.getDateTo());
        reservationDAO.save(reservation);
    }

    public void delete(long id){
        reservationDAO.delete(id);
    }

}
