package com.roomreservation.web.controller;

import com.roomreservation.core.dao.ReservationDAO;
import com.roomreservation.core.entity.Reservation;
import com.roomreservation.core.entity.Room;
import com.roomreservation.core.services.ReservationsService;
import com.roomreservation.core.services.RoomService;
import com.roomreservation.web.dto.ReservationDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/rooms")
public class RoomController {

    @Autowired
    RoomService roomService;

    @Autowired
    ReservationsService reservationsService;

    @RequestMapping(method = RequestMethod.GET)
    public List<Room> getRooms() {
        List<Room> userList = roomService.getAll();
        return userList;
    }

    @RequestMapping(method = RequestMethod.POST)
    public void saveRoom(@RequestBody Room room) {
        roomService.save(room);
    }

    @RequestMapping(value="/{id}", method = RequestMethod.DELETE)
    public void deleteRoom(@PathVariable("id") long id) {
        roomService.delete(id);
    }

    @RequestMapping(value="/{id}/reservations", method = RequestMethod.GET)
    public List<Reservation> getReservations(@PathVariable("id") long id) {
        List<Reservation> reservationList = reservationsService.findByRoom(id);
        return reservationList;
    }

    @RequestMapping(value="/{id}/reservations}", method = RequestMethod.POST)
    public void saveReservation(@RequestBody ReservationDTO reservationDTO) {
        reservationsService.save(reservationDTO);
    }

    @RequestMapping(value="/{id}/reservations/{id}", method = RequestMethod.DELETE)
    public void deleteReservation(@PathVariable("id") long id) {
        reservationsService.delete(id);
    }
}
