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

        Restaurant elCartel = new Restaurant("El Cartel", "15-16 Teviot Pl, Edinburgh, EH1 2QZ", "0131 370 8189", CuisineType.MEXICAN, "Our own take on authentic Mexican street food serving up the best vibes in town. ", 2, "http://www.elcartelmexicana.co.uk/", "https://elcartelmexicana.co.uk/wp-content/uploads/2021/08/EL_CARTEL_TEVIOT_FOOD.pdf", "https://lh5.googleusercontent.com/p/AF1QipP71AB0ofsqcvBq-7GPNvuOQPx9bVRC8Vu6eBhU=w203-h201-k-no");
        restaurantRepository.save(elCartel);

        Restaurant theOutsiderRestaurant = new Restaurant("The Outsider Restaurant", "15 George IV Bridge, Edinburgh, EH1 1EE", "0131 226 3131", CuisineType.BRITISH, "Laid-back eating using fresh, seasonal produce in split-level space with Castle views.", 3, "http://theoutsiderrestaurant.com/", "http://www.theoutsiderrestaurant.com/", "https://lh5.googleusercontent.com/p/AF1QipP76uNsUCFr-bNA6xLwBCdPZrYuLfbdFDtDwK7W=w203-h270-k-no");
        restaurantRepository.save(theOutsiderRestaurant);

        Restaurant ikagiRamen = new Restaurant("Ikigai Ramen", "13 W Crosscauseway, Newington, Edinburgh EH8 9JW", "07935 669042", CuisineType.JAPANESE, "Intimate traditional ramen bar, making homemade noodles and inhouse broths.", 2, "https://www.ikigairamen.co.uk/", "https://www.ikigairamen.co.uk/menu", "https://lh5.googleusercontent.com/p/AF1QipOiunLAdf7mYN8A1M2sZOsDvEjz-CLZE4o9kHL-=w203-h203-k-no");
        restaurantRepository.save(ikagiRamen);

        Restaurant cafeAndaluz = new Restaurant("Cafe Andaluz Old Town", "10-11 George IV Bridge, Edinburgh EH1 1EE", "0131 226 1002", CuisineType.SPANISH, " First opened in Glasgow’s West End in 2002, Café Andaluz serves up sunshine on a plate in Glasgow, Edinburgh and Aberdeen. Take a small step from the grey to Olé and make your escape to Spain with friends.", 3, "Homepage: https://www.cafeandaluz.com/edinburgh", "https://www.cafeandaluz.com/george-iv-menus", "https://lh5.googleusercontent.com/p/AF1QipNNOPisawaxxovjdt5BhT0j_UmOn4Rrbs_3FEg=w203-h135-k-no");
        restaurantRepository.save(cafeAndaluz);

        Restaurant topolobamba = new Restaurant("Topolobamba", "93 Lothian Rd, Edinburgh EH3 9AW", "0131 228 6863", CuisineType.MEXICAN, "Mexican street food restaurant serving big flavours, banging cocktails in a buzzing restaurant.", 2, "https://www.topolabamba.com/edinburgh", "https://static1.squarespace.com/static/603fa19a8fb2482000452b9f/t/60db1a3c10305444f6e66169/1624971843554/TopoA3tabelMenu2021c19_online.pdf", "https://lh5.googleusercontent.com/p/AF1QipMkLtXrzAQI7O3_GEomlFYmBU8hgHDNG5pGGgvt=w203-h135-k-no");
        restaurantRepository.save(topolobamba);

        Restaurant wagamama = new Restaurant("Wagamama", "1 Castle Terrace, Edinburgh EH1 2DP", "0131 229 5506", CuisineType.JAPANESE, "Asian-inspired & Japanese chain restaurant where dishes are whisked to long communal tables.", 3, "https://www.wagamama.com/restaurants/edinburgh/edinburgh-lothian-road", "http://www.wagamama.com/our-menu", "https://lh5.googleusercontent.com/p/AF1QipOZza9_r1Z5fX_l3gnq1YAGQMtr2qoGnQt2pKAa=w203-h114-k-no");
        restaurantRepository.save(wagamama);

        Restaurant gigi = new Restaurant("Gigi's", "74 Lothian St, and, Lasswade, Bonnyrigg, EH19 3AQ", "0131 660 6906", CuisineType.ITALIAN, "Bold, modern setting for classic regional Italian dishes including pizza, with a children's menu.", 2, "https://gigisrestaurant.co.uk/", "https://gigisrestaurant.co.uk/wp-content/uploads/2021/04/A-la-Carte.pdf", "https://lh5.googleusercontent.com/p/AF1QipPNSuuVlb033Ty8UfTsBZgu3w0NFi4EzTdqPYL-=w203-h185-k-no");
        restaurantRepository.save(gigi);

        Restaurant sofiasLounge = new Restaurant("Sofia's Lounge", "The Salisbury Boutique Hotel, 43-45 Salisbury Rd, Edinburgh, EH16 5AA", "0131 285 1433", CuisineType.LEBANESE, "Experience exquisite fine dining at Sofias, Edinburgh’s freshest answer to Mediterranean and Middle Eastern Dining. Taking traditional Mediterranean cuisine and adding a contemporary twist.", 3, "http://www.sofiaslounge.co.uk/", "https://sofiaslounge.co.uk/menu.html", "https://lh5.googleusercontent.com/p/AF1QipM9u5fuHUGIDiXNdZkiKkieD6yKKx8x4Clj4JbM=w203-h268-k-no");
        restaurantRepository.save(sofiasLounge);

        Restaurant radiCibus = new Restaurant("radiCibus", "2 Deanhaugh St, Stockbridge, Edinburgh, EH4 1LY", "0131 285 8608", CuisineType.ITALIAN, "We are an independent italian eatery and offer traditional Italian food in a contemporary style, paying particular attention in choosing the best organic Scottish and Italian ingredients.", 4, "https://radicibus.co.uk/", "https://radicibus.co.uk/tasting-radicibus-menu/", "https://lh5.googleusercontent.com/p/AF1QipNs2eQRWFclXSC9LFX9VU3TrjV6m7O_O3EFHur8=w203-h114-k-no");
        restaurantRepository.save(radiCibus);

        Reservation reservation1 = new Reservation("11/08/21", "19:10", 4, cold_town_house);
        reservationRepository.save(reservation1);
    }
}
