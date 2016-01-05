package com.roomreservation.core.services;

import com.roomreservation.core.dao.RoomDAO;
import com.roomreservation.core.entity.Room;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(propagation = Propagation.REQUIRES_NEW)
public class RoomService {

    @Autowired
    RoomDAO roomDAO;

    public List<Room> getAll(){
        return roomDAO.findAll();
    }

    public void save(Room room){
        roomDAO.save(room);
    }

    public void delete(long id){
        roomDAO.delete(id);
    }


}
