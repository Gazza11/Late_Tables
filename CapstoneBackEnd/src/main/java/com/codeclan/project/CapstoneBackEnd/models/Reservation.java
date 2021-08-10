package com.codeclan.project.CapstoneBackEnd.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
@Table(name = "reservations")
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "date")
    private String date;

    @Column(name = "time")
    private String time;

    @Column(name = "number_of_guests")
    private Integer numberOfGuests;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "restaurant_id", nullable = false)
    private Restaurant restaurant;


    public Reservation(String date, String time, Integer numberOfGuests, Restaurant restaurant) {
        this.date = date;
        this.time = time;
        this.numberOfGuests = numberOfGuests;
        this.restaurant = restaurant;
        this.restaurant.addReservation(this);
    }

    public Reservation(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Restaurant getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public Integer getNumberOfGuests() {
        return numberOfGuests;
    }

    public void setNumberOfGuests(Integer numberOfGuests) {
        this.numberOfGuests = numberOfGuests;
    }
}
