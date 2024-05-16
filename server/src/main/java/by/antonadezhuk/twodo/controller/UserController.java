package by.antonadezhuk.twodo.controller;

import by.antonadezhuk.twodo.dto.UserDto;
import by.antonadezhuk.twodo.model.Gender;
import by.antonadezhuk.twodo.model.User;
import by.antonadezhuk.twodo.service.UserService;
import by.antonadezhuk.twodo.service.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final UserMapper userMapper;

    @GetMapping
    public List<UserDto> getUsers(
            @RequestParam Long currentUserId,
            @RequestParam Gender gender,
            @RequestParam int distance,
            @RequestParam int minAge,
            @RequestParam int maxAge,
            @RequestParam Set<Integer> hobbyIds
    ) {
        List<User> users = userService.getUsers(currentUserId, gender, distance, minAge, maxAge, hobbyIds);
        return users.stream()
                .map(userMapper::userToUserDto)
                .toList();
    }

    @GetMapping("/{id}")
    public UserDto getUserById(@PathVariable Long id) {
        User user = userService.getUserById(id);
        return userMapper.userToUserDto(user);
    }

    @PutMapping("{id}")
    public void updateUserById(@PathVariable Long id, @RequestBody UserDto userRequestDto) {

    }

    @DeleteMapping("/{id}")
    public void deleteUserById(@PathVariable Long id) {
        userService.deleteUserById(id);
    }
}
