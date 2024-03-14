package edu.ntnu.calculator.persistence.repository;

import edu.ntnu.calculator.persistence.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface UserRepository extends MongoRepository<User, String> {

    @Query
    User findByUsername(String username);
}
