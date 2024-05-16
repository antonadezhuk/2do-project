package by.antonadezhuk.twodo.service.mapper;

import by.antonadezhuk.twodo.dto.SignUpRequest;
import by.antonadezhuk.twodo.dto.UserDto;
import by.antonadezhuk.twodo.model.User;
import by.antonadezhuk.twodo.service.HobbyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserMapper {

    private final HobbyService hobbyService;
    private final HobbyMapper hobbyMapper;
    private final ProfilePictureMapper profilePictureMapper;
    private final PointMapper pointMapper;

    public UserDto userToUserDto(User user) {
        if (user != null) {
            return UserDto.builder()
                    .id(user.getId())
                    .email(user.getEmail())
                    .firstName(user.getFirstName())
                    .lastName(user.getLastName())
                    .dateOfBirth(user.getDateOfBirth())
                    .gender(user.getGender())
                    .location(pointMapper.pointToPointDto(user.getLocation()))
                    .hobbies(user.getHobbies().stream()
                            .map(hobbyMapper::hobbyToHobbyDto)
                            .toList())
                    .profilePictures(user.getProfilePictures().stream()
                            .map(profilePictureMapper::profilePictureToProfilePictureDto)
                            .toList())
                    .build();
        }
        return null;
    }

    public User signUpRequestToUser(SignUpRequest signUpRequest) {
        if (signUpRequest != null) {
            return User.builder()
                    .email(signUpRequest.getEmail())
                    .password(signUpRequest.getPassword())
                    .firstName(signUpRequest.getFirstName())
                    .lastName(signUpRequest.getLastName())
                    .dateOfBirth(signUpRequest.getDateOfBirth())
                    .gender(signUpRequest.getGender())
                    .location(pointMapper.pointDtoToPoint(signUpRequest.getLocation()))
                    .hobbies(signUpRequest.getHobbyIds().stream()
                            .map(hobbyService::getHobbyById)
                            .collect(Collectors.toSet()))
                    .build();
        }
        return null;
    }
}
