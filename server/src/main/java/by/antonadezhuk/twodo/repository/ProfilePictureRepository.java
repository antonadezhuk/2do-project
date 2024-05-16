package by.antonadezhuk.twodo.repository;

import by.antonadezhuk.twodo.model.ProfilePicture;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfilePictureRepository extends JpaRepository<ProfilePicture, Long> {
}
