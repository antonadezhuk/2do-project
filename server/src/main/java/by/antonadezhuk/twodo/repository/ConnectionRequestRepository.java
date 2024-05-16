package by.antonadezhuk.twodo.repository;

import by.antonadezhuk.twodo.model.ConnectionRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConnectionRequestRepository extends JpaRepository<ConnectionRequest, Long> {
}
