package by.antonadezhuk.twodo.security;

import by.antonadezhuk.twodo.exception.UserNotFoundException;
import by.antonadezhuk.twodo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return new UserDetailsImpl(userRepository
                .findByEmail(username)
                .orElseThrow(() -> new UserNotFoundException("User with this email does not exist!")));
    }
}
