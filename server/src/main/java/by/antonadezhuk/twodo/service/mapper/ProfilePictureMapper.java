package by.antonadezhuk.twodo.service.mapper;

import by.antonadezhuk.twodo.dto.ProfilePictureDto;
import by.antonadezhuk.twodo.model.ProfilePicture;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProfilePictureMapper {

    public ProfilePictureDto profilePictureToProfilePictureDto(ProfilePicture profilePicture) {
        if (profilePicture != null) {
            return ProfilePictureDto.builder()
                    .id(profilePicture.getId())
                    .filePath(profilePicture.getFilePath())
                    .userId(profilePicture.getOwner().getId())
                    .build();
        }
        return null;
    }
}
