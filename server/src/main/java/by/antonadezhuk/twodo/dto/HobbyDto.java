package by.antonadezhuk.twodo.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class HobbyDto {

    private int id;

    private String name;

    private String iconName;
}
