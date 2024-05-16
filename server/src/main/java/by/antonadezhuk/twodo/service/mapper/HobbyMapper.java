package by.antonadezhuk.twodo.service.mapper;

import by.antonadezhuk.twodo.dto.HobbyDto;
import by.antonadezhuk.twodo.model.Hobby;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class HobbyMapper {

    public HobbyDto hobbyToHobbyDto(Hobby hobby) {
        if (hobby != null) {
            return HobbyDto.builder()
                    .id(hobby.getId())
                    .name(hobby.getName())
                    .iconName(hobby.getIconName())
                    .build();
        }
        return null;
    }

    public Hobby hobbyDtoToHobby(HobbyDto hobbyDto) {
        if (hobbyDto != null) {
            return Hobby.builder()
                    .id(hobbyDto.getId())
                    .name(hobbyDto.getName())
                    .iconName(hobbyDto.getIconName())
                    .build();
        }
        return null;
    }
}
