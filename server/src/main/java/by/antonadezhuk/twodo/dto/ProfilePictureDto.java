package by.antonadezhuk.twodo.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProfilePictureDto {

    private Long id;

    private String filePath;

    private Long userId;
}
