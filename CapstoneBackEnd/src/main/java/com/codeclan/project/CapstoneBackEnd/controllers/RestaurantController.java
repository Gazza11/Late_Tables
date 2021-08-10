package com.codeclan.project.CapstoneBackEnd.controllers;

import com.codeclan.project.CapstoneBackEnd.models.Restaurant;
import com.codeclan.project.CapstoneBackEnd.models.User;
import com.codeclan.project.CapstoneBackEnd.repositories.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RestaurantController {

    @Autowired
    RestaurantRepository restaurantRepository;

    @GetMapping(value = "/restaurants")
    public ResponseEntity<List<Restaurant>> getAllRestaurants(){
        return new ResponseEntity<>(restaurantRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "restaurant/{id}")
    public ResponseEntity getRestaurantById(@PathVariable Long id){
        return new ResponseEntity(restaurantRepository.findById(id), HttpStatus.OK);
    }
}
