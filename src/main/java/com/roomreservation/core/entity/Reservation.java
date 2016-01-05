package com.roomreservation.core.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;

@Entity(name = "reservation")
@Table(name="reservation")
public class Reservation extends BaseEntity{

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "room_id")
    private Room room;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @Column(nullable = false)
    private Date validfrom;


    @Column(nullable = false)
    private Date validto;

    public Reservation(){

    }

    public Reservation(Room room, Customer customer, Date validfrom, Date validto){
        this.room = room;
        this.customer = customer;
        this.validfrom = validfrom;
        this.validto = validto;
    }

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }

    public Date getValidto() {
        return validto;
    }

    public void setValidto(Date validto) {
        this.validto = validto;
    }

    public Date getValidfrom() {
        return validfrom;
    }

    public void setValidfrom(Date validfrom) {
        this.validfrom = validfrom;
    }

}
