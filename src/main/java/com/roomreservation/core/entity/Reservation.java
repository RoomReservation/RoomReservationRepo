package com.roomreservation.core.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity(name = "Reservation")
@Table(name="Reservation")
public class Reservation extends BaseEntity{

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "room_id")
    private Room room;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column(nullable = false)
    private Date validFrom;


    @Column(nullable = false)
    private Date validTo;

    public Reservation(Room room, User user, Date validFrom, Date validTo){
        this.room = room;
        this.user = user;
        this.validFrom = validFrom;
        this.validTo = validTo;
    }

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }

    public Date getValidTo() {
        return validTo;
    }

    public void setValidTo(Date validTo) {
        this.validTo = validTo;
    }

    public Date getValidFrom() {
        return validFrom;
    }

    public void setValidFrom(Date validFrom) {
        this.validFrom = validFrom;
    }

}
