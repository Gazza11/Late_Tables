package UnitTests;

import com.codeclan.project.CapstoneBackEnd.models.CuisineType;
import com.codeclan.project.CapstoneBackEnd.models.Reservation;
import com.codeclan.project.CapstoneBackEnd.models.Restaurant;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class RestaurantTest {

    Restaurant restaurant1;
    Reservation reservation1;
    Reservation reservation2;
    Reservation reservation3;



    @Before
    public void before(){
        restaurant1 = new Restaurant("Cold Town House", "4 Grassmarket, Edinburgh, EH1 2JU", "0131 357 2865", CuisineType.ITALIAN, "Casual stop with a rooftop terrace serving pizza with creative toppings, prosecco & craft beers.", 2, "https://coldtownhouse.co.uk/", "https://coldtownhouse.co.uk/wp-content/uploads/sites/10/dlm_uploads/2020/06/Cold-Town-House-Menu-16th-July.pdf", "https://lh5.googleusercontent.com/p/AF1QipNhAyX5_jiAxyxOI6GnGzlAm8iDUts5CGMpeHR8=w203-h135-k-no");

        reservation1 = new Reservation("10/08/21", "19:09", 4, restaurant1);
        reservation2 = new Reservation("29/08/21", "18:20", 2, restaurant1);
    }

    @Test
    public void addRes(){
        assertEquals(2, restaurant1.getReservations().size());
        restaurant1.removeReservation(reservation2);

    }

    @Test
    public void removeResAndReAdd(){
        assertEquals(2, restaurant1.getReservations().size());
        restaurant1.removeReservation(reservation2);
        reservation3 = new Reservation("22/09/22", "17:00", 4, restaurant1);
        assertEquals(2, restaurant1.getReservations().size());
    }

}
