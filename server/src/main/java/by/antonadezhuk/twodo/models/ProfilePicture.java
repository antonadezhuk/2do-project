package by.antonadezhuk.twodo.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "profile_picture")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProfilePicture {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "file_path")
    private String filePath;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User owner;
}
