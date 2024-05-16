package by.antonadezhuk.twodo.util;

import java.time.LocalDate;
import java.time.Period;

public class DateUtil {

    public static int calculateYears(LocalDate date) {
        return Period.between(date, LocalDate.now()).getYears();
    }
}
