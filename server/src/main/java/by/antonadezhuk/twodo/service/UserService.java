package by.antonadezhuk.twodo.service;

import by.antonadezhuk.twodo.model.Gender;
import by.antonadezhuk.twodo.model.User;

import java.util.Collection;
import java.util.List;

public interface UserService {

    List<User> getUsers();

    List<User> getUsers(
            Long currentUserId,
            Gender gender,
            int distance,
            int minAge,
            int maxAge,
            Collection<Integer> hobbyIds
    );

    User getUserById(Long id);

    User createUser(User user);

    User updateUserById(Long id, User updatedUser);

    void deleteUserById(Long id);
}
