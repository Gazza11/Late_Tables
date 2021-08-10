package com.codeclan.project.CapstoneBackEnd.controllers;

import com.codeclan.project.CapstoneBackEnd.models.User;
import com.codeclan.project.CapstoneBackEnd.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping(value = "/users")
    public ResponseEntity<List<User>> getAllUsers(){
        return new ResponseEntity(userRepository.findAll(), HttpStatus.I_AM_A_TEAPOT);
    }

    @GetMapping(value = "/users/{id}")
    public ResponseEntity getUserById(@PathVariable Long id){
        return new ResponseEntity(userRepository.findById(id), HttpStatus.OK);
    }

}
