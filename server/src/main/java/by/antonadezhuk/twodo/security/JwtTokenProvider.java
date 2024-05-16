package by.antonadezhuk.twodo.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.time.temporal.ChronoUnit;

@Component
public class JwtTokenProvider {

    @Value("${spring.security.jwt-secret}")
    private String secret;

    public String generateToken(UserDetails userDetails) {
        Instant issuedAt = Instant.now();
        Instant expiresAt = issuedAt.plus(30, ChronoUnit.DAYS);

        return JWT.create()
                .withSubject(userDetails.getUsername())
                .withIssuer("2do")
                .withIssuedAt(issuedAt)
                .withExpiresAt(expiresAt)
                .sign(Algorithm.HMAC256(secret));
    }

    public String verifyTokenAndRetrieveSubject(String token) throws JWTVerificationException {
        JWTVerifier verifier = JWT.require(Algorithm.HMAC256(secret))
                .withIssuer("2do")
                .build();
        DecodedJWT jwt = verifier.verify(token);
        return jwt.getSubject();
    }
}
