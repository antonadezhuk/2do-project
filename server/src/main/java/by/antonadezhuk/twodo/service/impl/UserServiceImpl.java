package by.antonadezhuk.twodo.service.impl;

import by.antonadezhuk.twodo.exception.UserNotFoundException;
import by.antonadezhuk.twodo.model.Gender;
import by.antonadezhuk.twodo.model.User;
import by.antonadezhuk.twodo.repository.UserRepository;
import by.antonadezhuk.twodo.service.UserService;
import by.antonadezhuk.twodo.service.specification.UserSpecifications;
import by.antonadezhuk.twodo.util.GeoUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public List<User> getUsers(
            Long currentUserId,
            Gender gender,
            int distance,
            int minAge,
            int maxAge,
            Collection<Integer> hobbyIds
    ) {
        User currentUser = userRepository
                .findById(currentUserId)
                .orElseThrow(() -> new UserNotFoundException("User with this ID does not exist!"));

        Specification<User> userSpecification = Specification.where(null);

        if (gender != null && gender != Gender.ALL) {
            userSpecification = userSpecification.and(UserSpecifications.hasGender(gender));
        }

        if (minAge > 0 && maxAge > minAge) {
            userSpecification = userSpecification.and(UserSpecifications.hasAgeBetween(minAge, maxAge));
        }

        if (hobbyIds != null && !hobbyIds.isEmpty()) {
            userSpecification = userSpecification.and(UserSpecifications.hasAnyOfHobbies(hobbyIds));
        }

//        if (distance > 0) {
//            userSpecification = userSpecification.and(UserSpecifications.hasLocationWithinDistance(currentUser.getLocation(), distance));
//        }

        if (distance > 0) {
            return userRepository.findAll(userSpecification).stream()
                    .filter(user -> GeoUtil.calculateDistance(currentUser.getLocation(), user.getLocation()) <= distance)
                    .toList();
        }

        return userRepository.findAll(userSpecification);
    }

    @Override
    public User getUserById(Long id) {
        return userRepository
                .findById(id)
                .orElseThrow(() -> new UserNotFoundException("User with this ID does not exist!"));
    }

    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User updateUserById(Long id, User updatedUser) {
        return updatedUser;
    }

    @Override
    public void deleteUserById(Long id) {
        User userToDelete = userRepository
                .findById(id)
                .orElseThrow(() -> new UserNotFoundException("User with this ID does not exist!"));
        userRepository.delete(userToDelete);
    }
}
