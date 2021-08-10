package com.codeclan.project.CapstoneBackEnd.repositories;

import com.codeclan.project.CapstoneBackEnd.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
