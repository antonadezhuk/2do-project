package by.antonadezhuk.twodo.repository;

import by.antonadezhuk.twodo.model.User;
import org.locationtech.jts.geom.Point;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long>, JpaSpecificationExecutor<User> {

    Optional<User> findByEmail(String email);

    Boolean existsByEmail(String email);

    @Query("SELECT u FROM User u WHERE ST_DistanceSphere(u.location, :currentUserLocation) <= :distance")
    List<User> findUsersWithinDistance(
            @Param("currentUserLocation") Point currentUserLocation,
            @Param("distance") double distance
    );
}
