package by.antonadezhuk.twodo.model;

import jakarta.persistence.*;
import lombok.*;
import org.locationtech.jts.geom.Point;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "\"user\"")
@Getter
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "email")
    @EqualsAndHashCode.Include
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;

    @Column(name = "gender")
    @Enumerated(EnumType.STRING)
    private Gender gender;

    @Column(name = "location", columnDefinition = "geometry(POINT, 4326)")
    private Point location;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "user_hobby",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "hobby_id")
    )
    private Set<Hobby> hobbies;

    @OneToMany(mappedBy = "owner", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<ProfilePicture> profilePictures;

    @OneToMany(mappedBy = "sender", cascade = CascadeType.ALL)
    private List<ConnectionRequest> sentConnectionRequests;

    @OneToMany(mappedBy = "receiver", cascade = CascadeType.ALL)
    private List<ConnectionRequest> receivedConnectionRequests;

    @ManyToMany
    @JoinTable(
            name = "connection",
            joinColumns = @JoinColumn(name = "user1_id"),
            inverseJoinColumns = @JoinColumn(name = "user2_id")
    )
    private Set<User> connections;
}
