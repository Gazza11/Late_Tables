package com.codeclan.project.CapstoneBackEnd.components;

import com.codeclan.project.CapstoneBackEnd.models.CuisineType;
import com.codeclan.project.CapstoneBackEnd.models.Reservation;
import com.codeclan.project.CapstoneBackEnd.models.Restaurant;
import com.codeclan.project.CapstoneBackEnd.models.User;
import com.codeclan.project.CapstoneBackEnd.repositories.ReservationRepository;
import com.codeclan.project.CapstoneBackEnd.repositories.RestaurantRepository;
import com.codeclan.project.CapstoneBackEnd.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    UserRepository userRepository;

    @Autowired
    ReservationRepository reservationRepository;

    @Autowired
    RestaurantRepository restaurantRepository;

    public DataLoader(){}

    public void run(ApplicationArguments args) {
        User user1 = new User("Steve", "steve01", "steve@gmail.com");
        userRepository.save(user1);

        User user2 = new User("Not Steve", "NotStevie", "NotSteve@AOL.com");
        userRepository.save(user2);

        Restaurant cold_town_house = new Restaurant("Cold Town House", "4 Grassmarket, Edinburgh, EH1 2JU", "0131 357 2865", CuisineType.ITALIAN, "Casual stop with a rooftop terrace serving pizza with creative toppings, prosecco & craft beers.", 2, "https://coldtownhouse.co.uk/", "https://coldtownhouse.co.uk/wp-content/uploads/sites/10/dlm_uploads/2020/06/Cold-Town-House-Menu-16th-July.pdf", "https://lh5.googleusercontent.com/p/AF1QipNhAyX5_jiAxyxOI6GnGzlAm8iDUts5CGMpeHR8=w203-h135-k-no");
        restaurantRepository.save(cold_town_house);

        Restaurant gigi = new Restaurant("Gigi's", "74 Lothian St, and, Lasswade, Bonnyrigg EH19 3AQ", "0131 660 6906", CuisineType.ITALIAN, "Bold, modern setting for classic regional Italian dishes including pizza, with a children's menu.", 2, "https://gigisrestaurant.co.uk/", "https://gigisrestaurant.co.uk/wp-content/uploads/2021/04/A-la-Carte.pdf", "https://lh5.googleusercontent.com/p/AF1QipPNSuuVlb033Ty8UfTsBZgu3w0NFi4EzTdqPYL-=w203-h185-k-no");
        restaurantRepository.save(gigi);

        Restaurant sofiasLounge = new Restaurant("Sofia's Lounge", "The Salisbury Boutique Hotel, 43-45 Salisbury Rd, Edinburgh EH16 5AA", "0131 285 1433", CuisineType.LEBANESE, "Experience exquisite fine dining at Sofias, Edinburgh’s freshest answer to Mediterranean and Middle Eastern Dining. Taking traditional Mediterranean cuisine and adding a contemporary twist.", 3, "http://www.sofiaslounge.co.uk/", "https://sofiaslounge.co.uk/menu.html", "https://lh5.googleusercontent.com/p/AF1QipM9u5fuHUGIDiXNdZkiKkieD6yKKx8x4Clj4JbM=w203-h268-k-no");
        restaurantRepository.save(sofiasLounge);

        Restaurant radiCibus = new Restaurant("radiCibus", "2 Deanhaugh St, Stockbridge, Edinburgh EH4 1LY", "0131 285 8608", CuisineType.ITALIAN, "We are an independent italian eatery and offer traditional Italian food in a contemporary style, paying particular attention in choosing the best organic Scottish and Italian ingredients.", 4, "https://radicibus.co.uk/", "https://radicibus.co.uk/tasting-radicibus-menu/", "https://lh5.googleusercontent.com/p/AF1QipNs2eQRWFclXSC9LFX9VU3TrjV6m7O_O3EFHur8=w203-h114-k-no");
        restaurantRepository.save(radiCibus);

        Reservation reservation1 = new Reservation("11/08/21", "19:10", 4, cold_town_house);
        reservationRepository.save(reservation1);
    }
}
