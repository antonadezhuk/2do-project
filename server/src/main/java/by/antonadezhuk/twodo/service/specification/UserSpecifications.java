package by.antonadezhuk.twodo.service.specification;

import by.antonadezhuk.twodo.model.Gender;
import by.antonadezhuk.twodo.model.Hobby;
import by.antonadezhuk.twodo.model.User;
import jakarta.persistence.criteria.Join;
import org.springframework.data.jpa.domain.Specification;

import java.time.LocalDate;
import java.util.Collection;

public class UserSpecifications {

    public static Specification<User> hasGender(Gender gender) {
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("gender"), gender);
    }

    public static Specification<User> hasAgeBetween(int minAge, int maxAge) {
        LocalDate minDateOfBirth = LocalDate.now().minusYears(maxAge);
        LocalDate maxDateOfBirth = LocalDate.now().minusYears(minAge);
        return (root, query, criteriaBuilder) ->
                    criteriaBuilder.between((root.get("dateOfBirth")), minDateOfBirth, maxDateOfBirth);
    }

    public static Specification<User> hasAnyOfHobbies(Collection<Integer> hobbyIds) {
        return (root, query, criteriaBuilder) -> {
            Join<User, Hobby> join = root.join("hobbies");
            return join.get("id").in(hobbyIds);
        };
    }

//    public static Specification<User> hasLocationWithinDistance(Point currentUserLocation, int distance) {
//        return (root, query, criteriaBuilder) -> {
//            Expression<Double> distanceExpression = criteriaBuilder.function(
//                    "ST_Distance",
//                    Double.class,
//                    root.get("location"),
//                    criteriaBuilder.literal(currentUserLocation)
//            );
//
//            return criteriaBuilder.lessThanOrEqualTo(distanceExpression, criteriaBuilder.literal((double) distance * 1000));
//        };
//    }

}