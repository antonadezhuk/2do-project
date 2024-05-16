package by.antonadezhuk.twodo.controller;

import by.antonadezhuk.twodo.dto.AuthenticationResponse;
import by.antonadezhuk.twodo.dto.SignInRequest;
import by.antonadezhuk.twodo.dto.SignUpRequest;
import by.antonadezhuk.twodo.model.ProfilePicture;
import by.antonadezhuk.twodo.model.User;
import by.antonadezhuk.twodo.security.JwtTokenProvider;
import by.antonadezhuk.twodo.security.UserDetailsImpl;
import by.antonadezhuk.twodo.service.FileStorageService;
import by.antonadezhuk.twodo.service.UserService;
import by.antonadezhuk.twodo.service.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationManager authenticationManager;
    private final UserService userService;
    private final FileStorageService imageStorageService;
    private final UserMapper userMapper;
    private final JwtTokenProvider jwtTokenProvider;

    @PostMapping(path = "/sign-up", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public AuthenticationResponse signUp(
            @RequestPart SignUpRequest signUpRequest,
            @RequestPart List<MultipartFile> images)
    {
        User user = userService.createUser(
                userMapper.signUpRequestToUser(signUpRequest)
        );

        List<ProfilePicture> profilePictures = new ArrayList<>();
        for (MultipartFile image : images) {
            profilePictures.add(
                    ProfilePicture.builder()
                            .filePath(imageStorageService.store(image))
                            .owner(user)
                            .build()
            );
        }
        user.setProfilePictures(profilePictures);

        String jwt = jwtTokenProvider.generateToken(new UserDetailsImpl(user));

        return AuthenticationResponse.builder()
                .accessToken(jwt)
                .user(userMapper.userToUserDto(user))
                .build();
    }

    @PostMapping("/sign-in")
    public AuthenticationResponse signIn(@RequestBody SignInRequest signInRequest) {
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                signInRequest.getEmail(), signInRequest.getPassword()
        );
        UserDetailsImpl userDetails = (UserDetailsImpl) authenticationManager.authenticate(authenticationToken).getPrincipal();

        String jwt = jwtTokenProvider.generateToken(userDetails);

        return AuthenticationResponse.builder()
                .accessToken(jwt)
                .user(userMapper.userToUserDto(userDetails.getUser()))
                .build();
    }
}
