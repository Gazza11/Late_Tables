package com.codeclan.project.CapstoneBackEnd;

import com.codeclan.project.CapstoneBackEnd.models.Reservation;
import com.codeclan.project.CapstoneBackEnd.models.Restaurant;
import com.codeclan.project.CapstoneBackEnd.repositories.ReservationRepository;
import com.codeclan.project.CapstoneBackEnd.repositories.RestaurantRepository;
import com.codeclan.project.CapstoneBackEnd.repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Optional;

import static org.junit.Assert.assertEquals;

@SpringBootTest
class CapstoneBackEndApplicationTests {

	@Autowired
	UserRepository userRepository;

	@Autowired
	ReservationRepository reservationRepository;

	@Autowired
	RestaurantRepository restaurantRepository;


	@Test
	void contextLoads() {
	}

	@Test
	public void hasReservation(){
		List<Restaurant> foundRestaurant = restaurantRepository.findAll();
		assertEquals(1, foundRestaurant.get(0).getReservations().size());
	}

}
