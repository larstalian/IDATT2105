package edu.ntnu.calculator.service;

import edu.ntnu.calculator.api.dto.UserDto;

public interface UserService {
    void registerUser(UserDto userDto);

    void loginUser(UserDto userDto);
}
