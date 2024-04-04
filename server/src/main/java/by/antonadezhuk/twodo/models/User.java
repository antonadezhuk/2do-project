package by.antonadezhuk.twodo.models;

import by.antonadezhuk.twodo.utils.PointJsonDeserializer;
import by.antonadezhuk.twodo.utils.PointJsonSerializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import jakarta.persistence.*;
import lombok.*;
import org.locationtech.jts.geom.Point;

import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "user")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class User {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

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
    @Temporal(TemporalType.DATE)
    private Date dateOfBirth;

    @Column(name = "gender")
    @Enumerated(EnumType.STRING)
    private Gender gender;

    @Column(name = "location", columnDefinition = "geometry(POINT, 4326)")
    @JsonSerialize(using = PointJsonSerializer.class)
    @JsonDeserialize(using = PointJsonDeserializer.class)
    private Point location;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "user_tag",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "tag_id")
    )
    private Set<Tag> tags;

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
