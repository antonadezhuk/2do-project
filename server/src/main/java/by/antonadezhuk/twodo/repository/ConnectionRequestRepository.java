package by.antonadezhuk.twodo.repositories;

import by.antonadezhuk.twodo.models.ConnectionRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConnectionRequestRepository extends JpaRepository<ConnectionRequest, Integer> {
}
