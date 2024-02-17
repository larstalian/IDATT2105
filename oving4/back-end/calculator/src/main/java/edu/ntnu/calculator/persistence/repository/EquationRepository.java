package edu.ntnu.calculator.persistence.repository;

import edu.ntnu.calculator.persistence.entity.EquationItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface EquationRepository extends MongoRepository<EquationItem, String> {


    @Query("{ 'expression' : ?0 }")
    EquationItem findByExpression(String expression);

    @Query("{ 'result' : ?0 }")
    EquationItem findByResult(String result);

}
