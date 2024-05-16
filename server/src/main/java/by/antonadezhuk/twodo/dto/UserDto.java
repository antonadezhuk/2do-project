package by.antonadezhuk.twodo.dto;

import by.antonadezhuk.twodo.model.Gender;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserDto {

    private Long id;

    private String email;

    private String firstName;

    private String lastName;

    private LocalDate dateOfBirth;

    private Gender gender;

    private PointDto location;

    private List<HobbyDto> hobbies;

    private List<ProfilePictureDto> profilePictures;
}
