package edu.ntnu.calculator.service;

import edu.ntnu.calculator.api.dto.UserDto;
import edu.ntnu.calculator.persistence.entity.User;
import edu.ntnu.calculator.persistence.repository.UserRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Value("${jwt.secret}")
    private String secretKey;

    @Value("${jwt.expiration}")
    private long tokenValidityInMilliseconds;

    public void registerUser(UserDto userDto) {
        User existingUser = userRepository.findByUsername(userDto.getUsername());
        if (existingUser != null) {
            throw new IllegalStateException("User already exists");
        }
        String encodedPassword = bCryptPasswordEncoder.encode(userDto.getPassword());

        User newUser = new User(userDto.getUsername(), encodedPassword);
        userRepository.save(newUser);
    }

    public void loginUser(UserDto userDto) {
        User user = userRepository.findByUsername(userDto.getUsername());
        if (user == null || !bCryptPasswordEncoder.matches(userDto.getPassword(), user.password())) {
            throw new IllegalStateException("Incorrect username or password");
        }

        // Generate JWT token
        Map<String, Object> claims = new HashMap<>();
        claims.put("sub", user.username());
        claims.put("created", new Date());

        Jwts.builder()
                .setClaims(claims)
                .setSubject(user.username())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + tokenValidityInMilliseconds))
                .signWith(SignatureAlgorithm.HS512, secretKey)
                .compact();
    }
}
