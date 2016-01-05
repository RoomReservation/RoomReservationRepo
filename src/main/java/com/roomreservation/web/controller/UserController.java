package com.roomreservation.web.controller;


import com.roomreservation.core.dao.ReservationDAO;
import com.roomreservation.core.entity.Reservation;
import com.roomreservation.core.entity.Room;
import com.roomreservation.core.services.ReservationsService;
import com.roomreservation.core.services.RoomService;
import com.roomreservation.web.dto.ReservationDTO;
import com.roomreservation.web.dto.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/resources/users")
public class UserController {

   @ResponseBody
   @RequestMapping(value="/current", method = RequestMethod.GET)
    public UserDTO getCurrentUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        UserDTO userDTO = new UserDTO();
        userDTO.setName(auth.getName()); //get logged in username
        return userDTO;
    }



}
