package by.antonadezhuk.twodo.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "hobby")
@Getter
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Hobby {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    @EqualsAndHashCode.Include
    private String name;

    @Column(name = "icon_name")
    private String iconName;
}
