package com.codeclan.project.CapstoneBackEnd.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "restaurants")
public class Restaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "address")
    private String address;

    @Column(name = "telephoneNumber")
    private String telephoneNumber;

    @Column(name = "cuisine")
    @Enumerated(value = EnumType.STRING)
    private CuisineType cuisine;

    @Column(name = "description")
    private String desc;

    @Column(name = "price")
    private Integer price;

//    private GeoLoc location;

    @Column(name = "webAddressHome")
    private String webAddressHome;

    @Column(name = "webAddressMenu")
    private String getWebAddressMenu;

    @OneToMany(mappedBy = "restaurant", fetch = FetchType.LAZY)
    @JsonBackReference
    private List<Reservation> reservations;

    @Column(name = "main_image")
    private String mainImage;

    public Restaurant(String name, String address, String telephoneNumber, CuisineType cuisine, String desc, Integer price, String webAddressHome, String getWebAddressMenu, String mainImage) {
        this.name = name;
        this.address = address;
        this.telephoneNumber = telephoneNumber;
        this.cuisine = cuisine;
        this.desc = desc;
        this.price = price;
        this.webAddressHome = webAddressHome;
        this.getWebAddressMenu = getWebAddressMenu;
        this.reservations = new ArrayList<>();
        this.mainImage = mainImage;
    }

    public Restaurant(){}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getTelephoneNumber() {
        return telephoneNumber;
    }

    public void setTelephoneNumber(String telephoneNumber) {
        this.telephoneNumber = telephoneNumber;
    }

    public CuisineType getCuisine() {
        return cuisine;
    }

    public void setCuisine(CuisineType cuisine) {
        this.cuisine = cuisine;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public String getWebAddressHome() {
        return webAddressHome;
    }

    public void setWebAddressHome(String webAddressHome) {
        this.webAddressHome = webAddressHome;
    }

    public String getGetWebAddressMenu() {
        return getWebAddressMenu;
    }

    public void setGetWebAddressMenu(String getWebAddressMenu) {
        this.getWebAddressMenu = getWebAddressMenu;
    }

    public List<Reservation> getReservations() {
        return reservations;
    }

    public void setReservations(ArrayList<Reservation> reservations) {
        this.reservations = reservations;
    }

    public void addReservation(Reservation reservation){
        this.reservations.add(reservation);
    }

    public void removeReservation(Reservation reservation){
        this.reservations.remove(reservation);
    }

    public String getMainImage() {
        return mainImage;
    }

    public void setMainImage(String mainImage) {
        this.mainImage = mainImage;
    }
}
