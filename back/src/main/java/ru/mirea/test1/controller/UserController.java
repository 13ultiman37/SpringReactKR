package ru.mirea.test1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.mirea.test1.domain.User;
import ru.mirea.test1.exception.ResourceNotFoundException;
import ru.mirea.test1.repo.UserRepo;

import java.lang.module.ResolutionException;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    UserRepo userRepo;

    @GetMapping
    public List<User> getAllUsers(){
        return userRepo.findAll();
    }

    @PostMapping
    public User createUser(@RequestBody User user){
        return userRepo.save(user);
    }

    @GetMapping("{id}")
    public ResponseEntity<User> getUserById(@PathVariable long id){
        User user = userRepo.findById(id)
                .orElseThrow(() -> new ResolutionException("User not exist with id:" + id));
        return ResponseEntity.ok(user);
    }

    @PutMapping("{id}")
    public ResponseEntity<User> updateUser(@PathVariable long id, @RequestBody User userDetails){
        User updateUser = userRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not exist with id:" + id));
        updateUser.setUsername(userDetails.getUsername());
        updateUser.setPassword(userDetails.getPassword());
        updateUser.setEmail(userDetails.getEmail());
        updateUser.setPhone(userDetails.getPhone());

        userRepo.save(updateUser);
        return ResponseEntity.ok(updateUser);
    }
}
