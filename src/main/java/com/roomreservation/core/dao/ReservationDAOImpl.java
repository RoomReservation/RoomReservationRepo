package com.roomreservation.core.dao;


import com.roomreservation.core.entity.Reservation;
import org.springframework.stereotype.Component;

@Component
public class ReservationDAOImpl extends CoreDAOImpl<Reservation, Long> implements ReservationDAO{
}
