package by.antonadezhuk.twodo.repository;

import by.antonadezhuk.twodo.model.Hobby;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HobbyRepository extends JpaRepository<Hobby, Integer> {
    List<Hobby> findAllByOrderByNameAsc();
}
