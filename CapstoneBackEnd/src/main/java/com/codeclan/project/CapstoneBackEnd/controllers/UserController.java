package com.codeclan.project.CapstoneBackEnd.controllers;

import com.codeclan.project.CapstoneBackEnd.models.User;
import com.codeclan.project.CapstoneBackEnd.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

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

//    @PostMapping(value = "/users")
//    public ResponseEntity createUser(@RequestBody User user){
//        userRepository.save(user);
//        return new ResponseEntity(user, HttpStatus.CREATED);
//    }

    @PutMapping(value = "/users/{id}")
    public ResponseEntity updateUser(@PathVariable Long id, @RequestBody User user){
        try {
            User userToUpdate = userRepository.findById(id).get();
            userToUpdate.setName(user.getName());
            userToUpdate.setUsername(user.getUsername());
            userToUpdate.setEmail(user.getEmail());

            userRepository.save(userToUpdate);
            return new ResponseEntity(userToUpdate, HttpStatus.OK);
        }
        catch (NoSuchElementException ex){
            return new ResponseEntity("user not found", HttpStatus.NOT_FOUND);
        }
    }

//    @DeleteMapping(value = "/users/{id}")
//    public ResponseEntity deleteUser(@PathVariable Long id){
//        userRepository.deleteById(id);
//        return new ResponseEntity(id, HttpStatus.OK);
//    }

}
