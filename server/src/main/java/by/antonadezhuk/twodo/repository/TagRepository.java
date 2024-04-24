package by.antonadezhuk.twodo.repositories;

import by.antonadezhuk.twodo.models.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TagRepository extends JpaRepository<Tag, Integer> {
    List<Tag> findAllByOrderByNameAsc();
}
