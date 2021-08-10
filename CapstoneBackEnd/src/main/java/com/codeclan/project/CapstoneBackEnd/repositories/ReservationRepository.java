package com.codeclan.project.CapstoneBackEnd.repositories;

import com.codeclan.project.CapstoneBackEnd.models.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
}
