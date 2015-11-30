package com.roomreservation.core.dao;


import com.roomreservation.core.entity.Reservation;

import java.util.List;

public interface ReservationDAO extends CoreDAO<Reservation, Long>{

    public List<Reservation> findByRoom(Long roomId);
}
